export type Enquiry = {
    _id: string
    fullName: string
    email: string
    contact: string
    message: string
}

export type addEnquiry = Omit<Enquiry, '_id'> & {}
export type ApiResponse = {
    success: boolean,
    data: Enquiry[]
}