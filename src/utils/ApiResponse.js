class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400   //status code >400 shows errors from client and server side 
    }
}

export { ApiResponse }