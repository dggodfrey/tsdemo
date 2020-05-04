# Step 1

## Details - Understanding the Code

1. Go through code:
   1. Root
      1. We are using basic yarn. The only package installed is React
      2. webpack config - SUPER basic config. The only thing we are doing is highlighting that we are using aliases. That is important because there aren't any great plugins to help surface those aliases into the editor intellisense. There are several that try and do a decent job. Those tools should be installed as part of what you did in the Readme.md.
   2. SRC - We will start at the bottom and work our way up
      1. utils
         1. utils.js - one function that takes many different types of inputs and returns a different set of dynamic types. This highlights how dynamic JS can be. Something that should be highlighted and celebrated.
         2. ajax.js - A get function to simulate a promise based ajax library. We are just returning a simple user object.
         3. index.js - just exports the other 2 files. Pretty standard practice.
      2. legacy
         1. utils - it is a deeply nested legacy util. This highlights that some intellisense plugins are limited to depth. If you dig through some of their documentation, they are limited to about 5 levels deep. This is also a webpack alias as it is common for legacy projects to have strangely nested aliases.
         2. something.js - Just a legacy function we are going to use that isn't part of an alias, but deeply nested. It highlights that some plugins may be limited, but the editor itself is not and the path intellisense can correctly help us here!
      3. components
         1. ComponentA - It is a Class Component. These are easier for intellisense because they have a clearer definition and structure. It is going to use our get ajax and then render ComponentB.
         2. ComponentB - It is a functional component. This highlights that since it isn't as structured as a Class component, intellisense works pretty well, but doesn't have as much structure so inferring is more difficult. This uses several of our utils. It also uses the data from our async call.
         3. NOTE: We can define `defaultProps` on the class and function. That will help with intellisense and autocomplete, but it doesn't help when you want some props to be optional. Sure you could write a bunch of code to handle empty string or undefined... But, why add all the code smell?


## Try it Out

1. Now that you understand the basic code structure. Open `src/utils/utils.js`
   1. What do you think the `someHelpfulUtil(null);` will return?
      1. See Answer at the end of this file
   2. Lets refactor `someHelpfulUtil`. It needs a better name.
      1. Right click any of the function names and select 'Rename Symbol'. I'm going to name it `someHelpfulUtilOfAwesomeness` because that is un-arguably better and more descriptive. 
         1. Notice it was able to rename everything in the same file, but failed to re-name our function in `ComponentB`. It wasn't able to resolve our `import * as utils from './utils';` in the index.js file.
   3. Lets try refactoring the ajax method in `src/utils/ajax.js`.
      1. Refactoring `get` to `getUserData` seems to have worked! One of our plugins helped us! If you disable the plugins and do just plain VSCode, it isn't able to rename the function in `ComponentA`.
      2. Do you see a problem with this function? Answer at the end of this file.
   4. You will find that refactoring our legacy tools work similarly. The editor is able to update the non-alias `convertToString` but unable to update the aliased `hi` function.
   5. Lets go to `src/components/componentA/componentAClass.js`
      1. remove the props we are adding to the render `<ComponentBFunctional`. 
      2. Now, type them back out. 
      3. USER - I can see that we do get an autocomplete on `user`. But it doesn't have any details and doesn't seem to be entirely sure.
      4. CALLBACK - It doesn't know about callback and there is no hinting done here.
   6. Lets go to `src/components/componentB/componentBFunctional.js`
      1. try removing some of the `props.user.*` statements and typing them back out. We aren't getting any hinting. 🤔
         1. Fun fact, if the user data were in a simple function, we would get code hinting. However, because it is inside of an asynchronous promise, even the TS built into VSCode and other intellisense plugins cannot link them and give us hinting on the hard coded object. 
            1. Try it out. 
            2. Remove the promise and just return the object. 
            3. Update the `setState`. 
            4. Tada! Code hinting! Too bad things don't work like this 😉
            5. However, this points out that simple functions that return something can give us code hinting (depending on the function and the data being returned). When our functions are more complicated we lose the built in intellisense. 


#### Answers to Questions

1. `someHelpfulUtil(null);`
   1. This will throw a type error. `null` is an object. So, it will get caught by the object type check and when you try to get keys from `null`. ERROR!
   2. How many times do we take BE data that could potentially have `null` as the value and pass it to a function? Are we handling `null` correctly in our code? 
      1. Maybe we are! Personally I think TS is helpful in calling things like this out, but isn't going to 'fix' anything for us.
      2. We will see later that TS will warn us.
2. `src/utils/ajax.js`
   1. Did you notice that we would never get to the `else`? Because of the way the code is written, we will never hit the else block. 
      1. TS will call this out later. We have 2 options. Either way, it forces us to think about our code in ways we may not have realized.
         1. Maybe it doesn't matter and doesn't need to be handled. We can just remove or leave the else and move on with life. TS won't enforce it unless we tell it to.
         2. It does need to be handled and we can update the `if` or change how we are handling it.


