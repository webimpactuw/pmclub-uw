# Website for the Product Management Club @ UW

This website is the cumulative effort of 6 UW students over the course of 6 months as part of the [Web Impact](https://webimpactuw.org/) initiative to facilitate the creation of free-of-charge websites for local communities and organizations within the Seattle area. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), styled with CSS, and deployed through GitHub pages. Icons used on the calendar page are the Fluent UI System Color Icons by Microsoft Corporation.

## The Team:

**Project Lead**: Tina Lai

**Design**: Deveshi Modi, Celine Chen, Patricia Isabel\
(Check out their [Figma design prototype](https://www.figma.com/proto/hY5yGUDlFY7zwwk2rbZHyA/Fidelity?node-id=509-326&t=5Goj6EJUAC7byqcG-9&scaling=scale-down&content-scaling=fixed&page-id=197%3A84&starting-point-node-id=509%3A326&show-proto-sidebar=1)!)

**Coding**: Rina Yuan, Ameya Bhide, Tina Lai

## Sanity.io

This website uses [Sanity.io](https://www.sanity.io/), a headless CMS, to provide an intuitive, code-less editing interface for the client.

The following information for the website can be updated / modified via Sanity:
- Officer info cards
- Events
  - Events are orderable via the [orderable document list plugin](https://www.sanity.io/plugins/orderable-document-list). 
- Resources
- Photos in the photo gallery

You can access the sanity studio at [https://pmclub-uw.sanity.studio/](https://pmclub-uw.sanity.studio/).

## Step-by-step to run this React application on your local computer

### 1. Install node.js / npm

Visit [node.js](https://www.figma.com/proto/hY5yGUDlFY7zwwk2rbZHyA/Fidelity?node-id=509-326&t=5Goj6EJUAC7byqcG-9&scaling=scale-down&content-scaling=fixed&page-id=197%3A84&starting-point-node-id=509%3A326&show-proto-sidebar=1) and follow their instructions.

### 2. Install Dependencies

Run `npm install`, then `npm install -g @sanity/cli` in the root directory of the project. 

After this has succeeded, you can run the following scripts:

- **`npm start`**
  - Runs the app in the development mode; open [http://localhost:3000](http://localhost:3000) to view it in your browser.
  - The page will reload when you make changes. You may also see any lint errors in the console.

### 3. Install sanity.io

Run `sanity install` in the sanity folder (`./sanity`).

After this has succeeded, you can run the following scripts (still inside the sanity folder):

- **`sanity dev`**
  - Runs the sanity studio in development mode; open [http://localhost:3333](http://localhost:3333) to view it in your browser.
  - The page will reload when you make changes. You may also see any lint errors in the console.

- **`npm install vision@latest` / `npm install sanity@latest`**
  - Upgrades the relevant sanity packages so they're up to date. In the event of running into errors about out-of-date packages.

## Deployment
 To deploy any new changes to the GitHub pages, run the following in the project directory: 
- `npm run predeploy`
- `npm run deploy`

 To deploy any new changes to the Sanity schema, run the following in the sanity folder (`./sanity`): 
- `sanity deploy`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
