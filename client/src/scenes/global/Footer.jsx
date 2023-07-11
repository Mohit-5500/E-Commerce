import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from "@mui/material"
import { shades } from "../../theme"
const Footer = () => {
    const { palette: { neutral }, } = useTheme()
    return (
        <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
            <Box width="80%" margin="auto" display="flex" justifyContent="space-between" flexWrap="wrap" rowGap="30px" columnGap="clamp(20px,30px,40px)">
                <Box width="clamp(20%,30%,40%)">
                    <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}>
                        E-Commerce
                    </Typography>
                    <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum adipisci odio similique aliquid sapiente rerum nesciunt quas. Iure veniam, fuga assumenda dolore id sequi autem totam sed omnis aperiam nam ipsum placeat.
                    </div>
                </Box>
                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        About Us
                    </Typography>
                    <Typography mb="30px">Careers</Typography>
                    <Typography mb="30px">Our Stores</Typography>
                    <Typography mb="30px">Terms and Conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>
                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        Customer Care
                    </Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
                    <Typography mb="30px">Returns & Refunds</Typography>
                </Box>
                <Box width="clamp(20%,25%,30%)">
                    <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}>
                        Contact Us
                    </Typography>
                    <Typography mb="30px">Dev Plaza , near aman garders</Typography>
                    <Typography mb="30px">Email:Something@gmail.com</Typography>
                    <Typography mb="30px">+91-1234567890</Typography>


                </Box>
            </Box>
        </Box >
    )
}

export default Footer
/*Certainly! Here's an explanation of each line of the code in simple language:

1. `import React from 'react'`: Imports the React library, which is necessary for creating React components.

2. `import { Box, Typography } from '@mui/material'`: Imports specific components, `Box` and `Typography`, from the Material-UI library.

3. `import { useTheme } from "@mui/material"`: Imports the `useTheme` hook from Material-UI, which allows accessing the theme object.

4. `import { shades } from "../../theme"`: Imports the `shades` object from a custom theme file located in the "../../theme" directory.

5. `const Footer = () => {`: Defines a functional component named `Footer`.

6. `const { palette: { neutral }, } = useTheme()`: Uses the `useTheme` hook to access the `neutral` color from the theme's palette.

7. `return (`: Begins the component's JSX code that will be rendered.

8. `<Box mt="70px" p="40px 0" backgroundColor={neutral.light}>`: Renders a `Box` component with specified styles, including margin-top, padding, and background color based on the `neutral.light` color from the theme.

9. `<Box width="80%" margin="auto" display="flex" justifyContent="space-between" flexWrap="wrap" rowGap="30px" columnGap="clamp(20px,30px,40px)">`: Renders a `Box` component with various styles, including width, margin, display, and spacing properties.

10. `<Box width="clamp(20%,30%,40%)">`: Renders a `Box` component with a specific width using the `clamp()` function to define a responsive value.

11. `<Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}>`: Renders a `Typography` component with specified variant, font weight, margin-bottom, and text color based on the `shades.secondary[500]` color from the theme.

12. `<div>`: Starts a `div` element.

13. `Lorem ipsum dolor, sit amet consectetur adipisicing elit...`: Adds placeholder text inside the `div` element.

14. `</div>`: Closes the `div` element.

15. `</Box>`: Closes the first `Box` component.

16. `<Box>`: Starts a new `Box` component.

17. `<Typography variant="h4" fontWeight="bold" mb="30px">`: Renders a `Typography` component with specified variant, font weight, and margin-bottom.

18. `<Typography mb="30px">Careers</Typography>`: Renders a `Typography` component with specified margin-bottom and text content.

19. `</Box>`: Closes the second `Box` component.

20. `<Box>`: Starts another `Box` component.

21. `<Typography variant="h4" fontWeight="bold" mb="30px">`: Renders a `Typography` component with specified variant, font weight, and margin-bottom.

22. `<Typography mb="30px">Help Center</Typography>`: Renders a `Typography` component with specified margin-bottom and text content.

23. `</Box>`: Closes the third `Box` component.

24. `<Box width="clamp(20%,25%,30%)">`: Renders a `Box` component with a specific width using the `clamp()` function to define a responsive value.

25. `<Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}>`: Renders a `Typography` component with specified variant, font weight, margin*/