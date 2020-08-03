export const setScreen = (screen, products) => ({
    type: 'SET_SCREEN',
    screen: screen,
    products: products
});
export const changeLogoUrl = (url) => (
    {
    type: 'SET_LOGO',
    url: url
    }
);