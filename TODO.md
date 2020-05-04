# Step 2

## Details - Understanding the Code

1. Added `typescript` and `@types/react` to package.json
2. Added `tsconfig.json` to the root of the project
3. Added examples of types and type conversion to legacy util.ts


## Try it Out

1. Lets convert a few files to TS (done branch: step-2a)
   1. `src/legacy/deeply/nested/because/why/not/else/util.js`
      1. [Basic types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
      2. Type conversion
      3. Update function return type to `string`
         1. Since this function is literally returning `hi` we can also return `hi`
            1. This specificity can come in handy for certain functions and can be used for more complicated generics
      4. Generics - Advanced TS. - They are variables that can hold types or modify types on the fly.
         1. You don't have to use them. 
         2. If you want help making one or want to learn more, lets do another training.
      5. Now that this file is converted, lets look at some of the cool things we can do with just this function so far.
         1. open `tsconfig.json` and uncomment out the 2 lines for `allowJs` and `checkJs`.
         2. Open `src/components/componentB/componentBFunctional.js`
            1. notice our import is wrong. Update `import hi from` to `import {hi} from`
               1. Not so much a note of TS as much as a bad mistake of mine I am too lazy to go back and update. However, I am disappointed that the editor with all the plugins didn't catch it. 
            2. Now you can hover over `hi` and see exactly what is going on!
            3. You can command+click the function name and be taken directly to the function! 
               1. right click and 'Go to Definition' also works!
         3. open `tsconfig.json` and comment out the 2 lines for `allowJs` and `checkJs`.
         4. now go back to `src/components/componentB/componentBFunctional.js`
            1. Even with the fixed import `hi` doesn't give any details when hovered over.
            2. Try command+click on `hi`.
               1. Oh, it doesn't work.
               2. Try right click and 'Go to Definition'.
                  1. Damn, no luck
         5. make sure `allowJs` and `checkJs` are commented out in `tsconfig.json`. We are going to keep going in our conversion.
            1. We don't have to enforce these for everyone. But, those that want them can add them to a workspace config and get all the benefits of TS in JS without the entire team having to have it. Pretty cool, eh!
   2. Lets do a more complicated and advanced file, now! `src/utils/utils.js` (done branch: step-2b)
      1. Rename the file to be `.ts`
      2. Notice there is one error! It is where we are trying to call the function with no params.
      3. This looks complicated, but lets convert this one part at a time. We are going to overload the function
         1. First start with the base. `someHelpfulUtil(item?: any): any {`
         2. Just work your way through the function defining all the different combinations of types
         3. Notice we still have an error for when we don't pass anything to the function
            1. We get a warning. We never handled a case where nothing is returned. It called out to us a potential issue. Now we have 2 decisions:
               1. Do we need to handle nothing and return something?
               2. Do we just overload the function so it knows nothing will be returned?
      4. WAIT A MINUTE?! In the first step we were tricked into believing there was a type error here! There is no error! Lies! Deceit! TS doesn't help me with bugs or knowing more about my code!
         1. Go to `tsconfig.json` and uncomment the line with `strictNullChecks`. By default this is turned off.
         2. Notice we get some warnings! Now it is correctly telling us that null can't be turned into a `string[]`
         3. Lets have a discussion about why this isn't on by default.
            1. It would surprise you how this setting shows different places where things could be missed! Very rarely are they false positives. It can be overwhelming in a large project to have that on and enforced.
            2. In a legacy project this creates a lot of noise and when on prevents the file from  compiling. It is easy to get into TS and then approach this later.
               1. TS Evangelicals will think implementing TS without this feature is a waste and then not worth moving to TS at all. I disagree. TS still provides a lot of value
               2. Also, more advanced TS users can override the tsconfig and enable this setting. So, those of us that want it can use it, without overwhelming TS newcomers. 
               3. A similar setting to this is `noImplicitAny`. This is what makes it so TS won't let you do `any` types (which is the catch all).
               4. There is a line in my mind where a tool is helpful and where it gets in the way. Personally I am a fan of `strictNullChecks`, but I am not a fan of `noImplicitAny`. <- Personal preference and belief. If you are the type of person who wants that, then enable it!
         4. The most important question to ask yourself here: "Would you have caught that on your own?". I am not even going to pretend to be a JS master. I love the hints, the suggestions, and the potential pitfalls. I sometimes move really fast and assume my stuff will be used in a specific way, but in reality, since JS is dynamic, I have to be careful with my assumptions. 
         5. Go to `tsconfig.json` and comment the line with `strictNullChecks`. We want to disable it again.
   3. Last file: `src/utils/ajax.js` (done branch: step-2c)
      1. rename file to `.ts`
      2. Notice we get no warning about the else block being reached. `data` will always be truthy the way it is written.
         1. There is an eslint rule to help with this.
         2. Pointing out because TS is great, but also has some things to improve on!




