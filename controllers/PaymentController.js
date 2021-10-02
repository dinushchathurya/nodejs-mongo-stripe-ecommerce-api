const stripe = require("stripe")(process.env.STRIPE_KEY);

const PaymentController = {

    async create_payment(req, res) {
        stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currentcy: "usd"
        }, (stripeErr, stripeRes)=>{
            if(stripeErr){
                res.status(500).json(stripeErr)
            } else {
                res.status(200).json(stripeRes)
            }
        });
    }
};

module.exports = PaymentController;