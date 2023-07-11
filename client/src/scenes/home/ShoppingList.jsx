import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";

const ShoppingList = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all");
    const items = useSelector((state) => state.cart.items);
    console.log("items", items);
    const breakPoint = useMediaQuery("(min-width:600px)");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    async function getItems() {
        const items = await fetch(
            "http://localhost:1337/api/items?populate=image",
            { method: "GET" }
        );
        const itemsJson = await items.json();

        dispatch(setItems(itemsJson.data));
    }

    useEffect(() => {
        getItems();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const topRatedItems = items.filter(
        (item) => item.attributes.categories === "topRated"
    );
    const newArrivalsItems = items.filter(
        (item) => item.attributes.categories === "newArrivals"
    );
    const bestSellersItems = items.filter(
        (item) => item.attributes.categories === "bestSellers"
    );

    return (
        <Box width="80%" margin="80px auto">
            <Typography variant="h3" textAlign="center">
                Our Featured <b>Products</b>
            </Typography>
            <Tabs
                textColor="primary"
                indicatorColor="primary"
                value={value}
                onChange={handleChange}
                centered
                TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
                sx={{
                    m: "25px",
                    "& .MuiTabs-flexContainer": {
                        flexWrap: "wrap",
                    },
                }}
            >
                <Tab label="ALL" value="all" />
                <Tab label="NEW ARRIVALS" value="newArrivals" />
                <Tab label="BEST SELLERS" value="bestSellers" />
                <Tab label="TOP RATED" value="topRated" />
            </Tabs>
            <Box
                margin="0 auto"
                display="grid"
                gridTemplateColumns="repeat(auto-fill, 300px)"
                justifyContent="space-around"
                rowGap="20px"
                columnGap="1.33%"
            >
                {value === "all" &&
                    items.map((item) => (
                        <Item item={item} key={`${item.name}-${item.id}`} />
                    ))}
                {value === "newArrivals" &&
                    newArrivalsItems.map((item) => (
                        <Item item={item} key={`${item.name}-${item.id}`} />
                    ))}
                {value === "bestSellers" &&
                    bestSellersItems.map((item) => (
                        <Item item={item} key={`${item.name}-${item.id}`} />
                    ))}
                {value === "topRated" &&
                    topRatedItems.map((item) => (
                        <Item item={item} key={`${item.name}-${item.id}`} />
                    ))}
            </Box>
        </Box>
    );
};

export default ShoppingList;

/*This code is a React component called `ShoppingList` that renders a shopping list with tabs to filter the items based on different categories. Let's go through the code step by step:

1. The code imports necessary dependencies and components from various libraries, such as React, Material-UI (or MUI), and Redux.

2. The `ShoppingList` component is defined as a functional component using the arrow function syntax.

3. Inside the component, there is a Redux hook called `useDispatch` that retrieves the dispatch function, and a selector hook called `useSelector` that retrieves the items from the Redux store.

4. The component initializes some state variables using the `useState` hook. The `value` state variable is used to keep track of the currently selected tab value.

5. The `useMediaQuery` hook is used to define the `breakPoint` variable, which determines whether the screen width is greater than or equal to 600px.

6. The component defines a function `getItems` that performs an asynchronous fetch request to retrieve items from an API endpoint. Once the items are fetched, the response data is converted to JSON, and then the `setItems` action from the Redux state management is dispatched to update the items in the store.

7. The `useEffect` hook is used to call the `getItems` function when the component is mounted. The empty dependency array `[]` ensures that the effect runs only once.

8. The code filters the items array into three separate arrays based on their categories: `topRatedItems`, `newArrivalsItems`, and `bestSellersItems`.

9. The component returns JSX code that renders the shopping list and tabs using Material-UI components. The tabs allow users to switch between different categories of items.

10. Inside the JSX code, there is a conditional rendering of the items based on the currently selected tab value (`value` state variable). The `items.map` function is used to render all items when the "ALL" tab is selected. Similarly, the `newArrivalsItems.map`, `bestSellersItems.map`, and `topRatedItems.map` functions are used to render items based on their respective categories when the corresponding tabs are selected.

11. The rendered items are wrapped in the `Item` component, which is a custom component that likely displays the details of each item.

12. The component is exported as the default export, allowing it to be imported and used in other parts of the application.

Overall, this code sets up a shopping list with filterable tabs, fetches items from an API, and renders the items based on the selected category.*/