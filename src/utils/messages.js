const generateMessage = (username, text)=>{
    return {
        username,
        text,
        createdAt : new Date().getTime()
    }
}

const generateLoactionMessage = (username, locationURL)=>{
    return {
        username,
        locationURL,
        createdAt : new Date().getTime()
    }
}
module.exports = {
    generateMessage,
    generateLoactionMessage
}