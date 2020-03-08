import React from "react"
import axios from "axios"

const TestData = JSON.stringify({
  phoneNumber: "+19185555555",
  email: "test@test.com",
  firstName: "Michael",
  lastName: "McQuade",
  businessName: "Softwoof",
  timeInBusiness: "3-4",
  homeOwner: null,
  businessStructure: "Sole Proprietorship",
  state: "Oklahoma",
  equipmentType: "hammer",
  newUsed: "new",
  financeAmount: 180000,
})

const config = {
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
  data: {},
}

class TestPage extends React.PureComponent {
  async componentDidMount() {
    const res = await axios
      .post(
        "https://98y6soa6ik.execute-api.us-east-1.amazonaws.com/dev/",
        TestData,
        config
      )
      .then(r => r.data)
    console.log(res)
  }
  render() {
    return <div>Only testing</div>
  }
}
export default TestPage
