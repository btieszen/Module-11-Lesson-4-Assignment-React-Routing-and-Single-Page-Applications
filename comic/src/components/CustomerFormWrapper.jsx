function CustomerFormWrapper(){
    let params=useParams()
    let navigate=useNavigate()

    return<CustomerForm params={params} navigate={navigate}/>
}

export default CustomerFormWrapper;