import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";

//import all images from the assests foldes
/*The provided code is written in JavaScript and defines two functions that work together to import multiple assets from a specific directory. Let's break it down step by step:

const importAll = (r) => r.keys().reduce((acc, item) => { acc[item.replace('./', '')] = r(item); return acc; }, {});
This function, importAll, takes a parameter r which is expected to be a function that returns a module containing imported assets. The purpose of this function is to import all assets from a given directory and store them in an object.

r.keys() is a function that returns an array of all the keys (file paths) in the module.
reduce() is an array method that iterates over each key (file path) in the array and accumulates the values into a single object.
acc represents the accumulator object that is being built up.
item.replace('./', '') removes the leading "./" from each key, as it's not necessary for the object property names.
acc[item.replace('./', '')] = r(item); assigns the value of the imported asset (obtained by calling r(item)) to the corresponding property in the accumulator object.
The empty object {} passed as the second argument to reduce() initializes the accumulator as an empty object.
In summary, the importAll function takes a function r (which returns a module with imported assets), extracts the keys (file paths) from that module, removes the "./" prefix from each key, imports the assets using the provided function, and stores them in an object, which is returned as the final result of the function.

const heroTextureImports = importAll(require.context('../../assets/hero-textures', false, /\.(png|jpe?g|svg)$/));
This line of code utilizes the importAll function to import all assets (PNG, JPEG, SVG files) from the ../../assets/hero-textures directory and store them in the heroTextureImports object.

require.context('../../assets/hero-textures', false, /\.(png|jpe?g|svg)$/) creates a context module that allows importing multiple assets from a specific directory. It takes three arguments:

The relative path to the directory containing the assets (../../assets/hero-textures).
A boolean indicating whether to include subdirectories (false in this case, meaning only assets from the specified directory will be imported).
A regular expression (/\.png|jpe?g|svg$/) that specifies the file extensions of the assets to be imported (PNG, JPEG, and SVG in this case).
The importAll function is called with the created context module as an argument, and the result is assigned to the heroTextureImports variable.

After executing these lines of code, the heroTextureImports object will contain properties corresponding to each imported asset, with the asset's file name (without the "./" prefix) as the property name and the imported asset as the property value. This allows easy access to the imported assets in the specified directory for further use in the application.*/
const importAll = (r) =>
    r.keys().reduce((acc, item) => {
        acc[item.replace("./", "")] = r(item);
        return acc;
    }, {});

export const heroTextureImports = importAll(
    require.context("../../assests", false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    return (
        <Carousel
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
                <IconButton
                    onClick={onClickHandler}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "0",
                        color: "white",
                        padding: "5px",
                        zIndex: "10",
                    }}
                >
                    <NavigateBeforeIcon sx={{ fontSize: 40 }} />
                </IconButton>
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => (
                <IconButton
                    onClick={onClickHandler}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        right: "0",
                        color: "white",
                        padding: "5px",
                        zIndex: "10",
                    }}
                >
                    <NavigateNextIcon sx={{ fontSize: 40 }} />
                </IconButton>
            )}
        >
            {Object.values(heroTextureImports).map((texture, index) => (
                <Box key={`carousel-image-${index}`}>
                    <img
                        src={texture}
                        alt={`carousel-${index}`}
                        style={{
                            width: "100%",
                            height: "700px",
                            objectFit: "cover",
                            backgroundAttachment: "fixed",
                        }}
                    />
                    <Box
                        color="white"
                        padding="20px"
                        borderRadius="1px"
                        textAlign="left"
                        backgroundColor="rgb(0, 0, 0, 0.4)"
                        position="absolute"
                        top="46%"
                        left={isNonMobile ? "10%" : "0"}
                        right={isNonMobile ? undefined : "0"}
                        margin={isNonMobile ? undefined : "0 auto"}
                        maxWidth={isNonMobile ? undefined : "240px"}
                    >
                        <Typography color={shades.secondary[200]}>-- NEW ITEMS</Typography>
                        <Typography variant="h1">Summer Sale</Typography>
                        <Typography
                            fontWeight="bold"
                            color={shades.secondary[300]}
                            sx={{ textDecoration: "underline" }}
                        >
                            Discover More
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Carousel>
    );
};

export default MainCarousel;