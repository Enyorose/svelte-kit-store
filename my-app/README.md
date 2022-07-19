# The issue with the svelte store
## Background
- Hello, I am looking for assistance to solve a problem. What I have in this repo is a small piece of a larger project. What I am trying to do is be able to select one vehicle and send that to the update modal. 
## To the Issue
- I have been trying to devise a way to either send the index of the vehicle clicked on to the modal so I can then use it to isolate the object needed.
- Or isolate the vehicle by vehicle_id and be able to use that to ony display that one object. 



# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
