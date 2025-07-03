const mongoose = require('mongoose');

const TokenBlacklistSchema = new mongoose.Schema({
    token: String,
    expiresAt: Date
});

module.exports = mongoose.model('TokenBlacklist', TokenBlacklistSchema);
