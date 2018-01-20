# Shopping cart app
Technical assessment: Shopping cart web app that allows user to manage the chart and see the list of products.

## Running the project
```
npm install
npm start
```

To check test coverage:
```
npm test -- --converage
```

## Features developed
- [X] Styles
- [X] View the list of products available
	- with user feedback
- [X] Switch between list view and grid view
- [X] Search product (from both views)
- [X] Add product to cart
- [X] Handling item quantity
	- block user to add an item not in stock
	- decrease quantity of items in stock when adding
- [X] Navigate between pages
- [X] View the products in the cart
- [X] Manage quantity of each product on cart
- [X] Calculates the total price
- [  ] Top-5 viewed sopping cart

## Development details
### Code
- IDE used for coding: Visual Studio Code
- Project created via `create-react-app`
- `redux-devtools-extension` configured to run only on dev environment
- ES6 syntax
- Commits have meaningful titles
	- Use commits history in oder to check how was the development process

### Automated tests
- Every single file created in the project has its own testing file which can be found in the same folder level as the source code. Two main extensions were used:
	1.  `.spec` files test React Components. In order to guarantee the resulting HTML structure of components the tests were made through snapshots and they do not have logic.
	2.  `.test` files test `actions`, `reducers`, `sources` and `utils` files. As they have logic the tests were made ti guarantee that their behavior did not change  (same for smart components or containers).
- Frameworks used for testing:
	1. `enzyme` to render and manipulate rendered React components
	2. `react-test-renderer` to generate snapshots of dumb/stateless components
	3. `axios-mock-adapter` to mock ans simulate requests and HTTP responses

### Data storage
- Local data was stored in the component's state level
- Redux was used in order to store and manage the data that is shared among the app.
- A particular data structure was chosen to store data due to 2 main reasons:
	1. Better performance for iteration for operations as find and filter over an array of only ids than an array of object elements (only need to use `projects.ids`)
	2. Good performance and easier to access stored data (only need to access `projects.content['id']` and you will have directly access to data. No need to find the item in the array to get it)
	- Find an structure example below:
```
projects: {
	ids: [1, 2],
	content: {
		1: { myObjectData },
		1: { myObjectData },
	},
}
```

### Additional details
- `communication` redux state were created in order to store loading flags. Those flags are retrieved from meta tag inserted in the action payload (see `reducers/communication`).
- `sources` are the files responsible for request information from backend, decoupling the request code from the actions and components.
- `normalizers` are the files responsible for get raw data and convert it according to the pattern adopted for the whole project
- `adapter` concept were applied for basic components (see all components in `components/shared` folder).
