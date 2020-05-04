# Step 2

## Details - Understanding the Code

1. Changed extension - `src/utils/index.js` -> `src/utils/index.ts`
2. `src/utils/ajax.ts` broke data into interface
   1. Interface is a group/object of types
   2. Can also use `Type` for single
   3. Also added return type in TS


## Try it Out

1. Lets convert our components to TS and link everything together
   1. `src/components/componentA/componentAClass.js`
      1. rename to `.tsx`
      2. Notice when you hover over `data` in `componentDidMount` it tells you what Interface it is!
         1. You now have full autocomplete with asynchronous functions!
      3. We need to tell TS that the `data` is going to be set as the data in state.
         1. It is important to understand that even though we already know the type of the data, TS has already set `state` and `state.data` as `any`. This is because even though it could infer the types, it doesn't because state could be changed, modified, and could potentially be changed not to follow the data structure we have. It is important to understand infer !== assume.
         2. Create an interface for state
            1. we want to create an interface for state because we may want to change it later!
            2. We already exported the interface from ajax for you. So, if you just start typing userData, it will autocomplete and auto import it for you.
            3. Since we want to also support an empty object so we can access properties even if they aren't available yet, we can tell TS we want to allow an empty object: `user: userData | {};`
   2. `src/components/componentB/componentBFunctional.js`
      1. rename to `.tsx`
      2. Notice when you hover over `props`, we still don't have type hinting. Shouldn't it know that we are passing it a `userData` type?
         1. Again... assume !== infer. This is where the power of TS really comes in. We know more than what the code can infer from usage! So, lets give those details to TS so it can help us out.
      3. Create an interface for props. It will have 2 props: `user` and `callback`
      4. Now that is done, you can remove any of the `props.user.*` and see that you get autocomplete because we now know what the type is.
         1. If you added the same type as in `ComponentA` you will get an error that 'user' and the other properties are not available on `{}`. You may think: "Ugh. See, this is why TS is so frustrating and a waste of time." The problem isn't hard to fix, but we are now very aware that when our child component is initialized, it could potentially be an empty object! We are on our way to more resilient code! Lets fix it! We have a few choices:
            1. Make all the properties optional in the ajax file where we defined `userData`
            2. Make a generic of the data so we can dynamically make all the fields optional
            3. Set the initial value to undefined in `ComponentA` and then handle that in `ComponentB`
         2. I like the Idea of #3. We can show the user it is still loading, and the update when the data comes in! Better user experience and better data handling. (I will put the generic for #2 in a comment in the done code, just in case you are curious - It will use a utility type!)
   3. Go back to `src/components/componentA/componentAClass.tsx`
      1. Remove the props from `<ComponentBFunctional  />`
         1. Notice there is a warning! We are missing props!
         2. press ctrl+space and you will see all the props and their types!
         3. You can now edit `ComponentB` and make some optional, or do whatever you like
      2. We did this a little backwards, but can you see how helpful TS can be? Lets have a little more fun ;)
2. Lets do some of the things that didn't work in the first step.
   1. `src/utils/utils.ts`
      1. Refactor `someHelpfulUtil` to `someHelpfulUtilOfAmazingness` Remember how much better that name was?!
         1. It updated our utils file AND `ComponentB`! Even with the `import * as utils`! 😱
            1. Previously that didn't work, because JS intellisense couldn't link them together. 
            2. TS has its own paths attribute in `tsconfig.json` so it knows how all the aliases and files are linked!
               1. What does this mean? You can rename, refactor, move files around, etc and TS will be able to update all the other files that use or reference it! No more searching the project for imports to update them manually. 
                  1. NOTE: The Path Intellisense can help with this, but not when the import is a `* as`. It also doesn't always work or catch all of the instances. With TS, it can catch all instances (and can even do it for non-ts files if `allowJS` and `checkJS` are enabled)
                  2. It is the difference between a plugin getting you 90% of the way there and TS doing the other 10.
   2. `src/legacy/deeply/nested/because/why/not/else/util.ts`
      1. Refactor `hi` to `hello`
         1. It was updated in the file AND in `ComponentB`! Huzzah!

## Final Notes

I hope this shows how TS can be used to help you as a developer. This just scratches the surface. TS doesn't replace JS, nor does it fix any JS issues. It just bridges the gap of what it currently can do, and what its potential is when we give it more information! TS will only be as good as the interfaces and types that are written. Which is why you can still have bugs with TS. But, the ability to have self documenting code that can help you get back into context faster than having to dig through code manually, it is invaluable. And if it can help you see, understand, and refactor more reliably and quickly. Why not at least give it a try?!
