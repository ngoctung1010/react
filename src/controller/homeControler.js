const home1 = (req, res) => {
    return res.render("home.ejs");

}
const home2 = (req, res) => {
    return res.render("user.ejs");

}




module.exports = {
    home1, home2
}

