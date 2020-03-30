import React from "react"
import { Field } from "react-final-form"
import Wizard from "./Wizard"
import phone from "phone"
import { navigate } from "gatsby"
import Slider from "rc-slider"
import axios from "axios"
import "rc-slider/assets/index.css"

/*
There are a bunch of errors in the console whenever you navigate forward or backwards in the wizard,
this is documented on the github issue at:
https://github.com/final-form/react-final-form/issues/751
*/

const reqConfig = {
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
  data: {},
}

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)

const required = value => (value ? undefined : "Required")
const emailValidator = value => {
  if (!value) {
    return "Required"
  } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return undefined
  } else {
    return "Invalid Email"
  }
}

//I made an assumption here that we only accept US based phone numbers
const phoneValidator = value => {
  if (!value) {
    return "Required"
  } else if (phone(value, "USA").length === 0) {
    return "Invalid Phone Number"
  } else {
    return undefined
  }
}

const formatNum = value => {
  const formattedNum = phone(value, "USA")
  let formattedValue = formattedNum.length !== 0 ? formattedNum[0] : value

  return formattedValue
}

const RadioComponent = (props, setHomeOwner) => {
  const {
    id,
    input: { ...others },
  } = props

  return (
    <input
      {...others}
      id={id}
      type="radio"
      onClick={event => {
        const {
          currentTarget: { id },
        } = event

        if (id === "zeroToTwo") {
          setHomeOwner(true)
        } else {
          setHomeOwner(false)
        }
      }}
    ></input>
  )
}
const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

class Form extends React.PureComponent {
  state = {
    showHomeownerQuestion: false,
    firstName: "",
  }

  setHomeOwner = show => {
    console.log("hello", show)
    this.setState({ showHomeownerQuestion: show })
  }

  onSubmit = async values => {
    //console.log(values)
    const res = await axios.post(
      "https://3a9rlk9zv5.execute-api.us-east-1.amazonaws.com/dev/",
      values,
      reqConfig
    )
    //console.log(res.data)
    navigate("/thankyou", { state: { name: values.firstName } })
  }

  render() {
    const {
      setHomeOwner,
      onSubmit,
      state: { showHomeownerQuestion },
    } = this

    return (
      <div>
        <Wizard onSubmit={onSubmit}>
          <Wizard.Page>
              <h3>Personal Info</h3>
              <div className="flexer">
                <label className="displaynone">First Name</label>
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder="First Name"
                  validate={required}
                />
                <Error name="firstName" />
                <label className="displaynone">Last Name</label>
                <Field
                  name="lastName"
                  component="input"
                  type="text"
                  placeholder="Last Name"
                  validate={required}
                />
                <Error name="lastName" />
                <label className="displaynone">Email</label>
                <Field
                  name="email"
                  component="input"
                  type="email" /* You can change this to text if you want but may lose some accessibility*/
                  placeholder="Email"
                  validate={emailValidator}
                />
                <Error name="email" />
                <label className="displaynone">Phone Number</label>
                <Field
                  name="phoneNumber"
                  component="input"
                  format={formatNum}
                  parse={formatNum}
                  formatOnBlur
                  type="tel"
                  pattern
                  placeholder="Phone Number"
                  validate={phoneValidator}
                ></Field>
                <Error name="phoneNumber" />
              </div>
          </Wizard.Page>
          <Wizard.Page>
            <h3>Business Info</h3>
            <div className="flexer">
              <label className="displaynone">Business Name</label>
              <Field
                name="businessName"
                component="input"
                type="text"
                placeholder="Business Name"
                validate={required}
              />
              <Error name="businessName" />
            </div>
            <h4>Years in business?</h4>
            <div className="radioswitch">
              <Field
                id="zeroToTwo"
                name="timeInBusiness"
                value="0-2"
                type="radio"
              >
                {props => RadioComponent(props, setHomeOwner)}
              </Field>
              <label htmlFor="zeroToTwo">0-2</label>
              <Field
                id="threeToFour"
                name="timeInBusiness"
                type="radio"
                value="3-4"
              >
                {props => RadioComponent(props, setHomeOwner)}
              </Field>
              <label  className="threeToFour" htmlFor="threeToFour">3-4</label>
              <Field
                id="fivePlus"
                name="timeInBusiness"
                type="radio"
                value="5+"
              >
                {props => RadioComponent(props, setHomeOwner)}
              </Field>
              <label className="fivePlus" htmlFor="fivePlus">5+</label>
              <Error name="timeInBusiness" />
            </div>
            {showHomeownerQuestion && (
              <div>
                <h4>Are you a homeowner?</h4>
                <div className="homeOwner">
                  <Field
                    component="input"
                    name="homeOwner"
                    type="radio"
                    value="true"
                    id="homeOwner"
                  ></Field>
                  <label htmlFor="homeOwner">Yes</label>
                  <Field
                    component="input"
                    name="homeOwner"
                    type="radio"
                    value="false"
                    id="notHomeOwner"
                  ></Field>
                  <label className="notHomeOwner" htmlFor="notHomeOwner">No</label>
                </div>
              </div>
            )}
            <div>
              <h4>Business Structure?</h4>
              <label className="displaynone">Business Structure</label>
              <Field
                className="select-css"
                validate={required}
                name="businessStructure"
                component="select"
              >
                <option value="">Choose structure</option>
                <option value="Sole Proprietorship">Sole Proprietorship</option>
                <option value="Partnership">Partnership</option>
                <option value="Corporation">Corporation</option>
                <option value="Limited Liability Company">
                  Limited Liability Company
                </option>
              </Field>
              <Error name="businessStructure" />
            </div>
            <div>
            <h4>What State Are You In?</h4>
              <label className="displaynone">Which state are you in?</label>
              <Field className="select-css" validate={required} name="state" component="select">
                <option value="">State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </Field>
              <Error name="state" />
            </div>
          </Wizard.Page>
          <Wizard.Page>
            <h3>Equipment Information</h3>
            <div className="flexer">
              <h4>Equipment Type?</h4>
              <label className="displaynone">Equipment Type</label>
              <Field
                className="select-css"
                validate={required}
                name="equipmentType"
                component="select"
              >
                <option value="">Equipment</option>
                <option value="construction">Construction</option>
                <option value="trailers">Trailers</option>
                <option value="towing">Towing</option>
                <option value="trucking">Trucking</option>
                <option value="septic">Septic</option>
              </Field>
              <Error name="equpmentType" />
            </div>
            <h4>Years in business?</h4>
            <div className="radioswitch">
              <Field
                component="input"
                name="newUsed"
                type="radio"
                value="new"
                id="newRadio"
              ></Field>
              <label htmlFor="newRadio">New</label>
              <Field
                component="input"
                name="newUsed"
                type="radio"
                value="used"
                id="usedRadio"
              ></Field>
              <label htmlFor="usedRadio">Used</label>
            </div>
            <div>
              <label>How much are you wanting to finance?</label>
              <Field name="financeAmount" initialValue="10000">
                {props => (
                  <div>
                    <Slider
                      onChange={props.input.onChange}
                      step={10000}
                      max={500000}
                      min={10000}
                    ></Slider>
                    <h1>{moneyFormatter.format(props.input.value)}</h1>
                  </div>
                )}
              </Field>
            </div>
          </Wizard.Page>
        </Wizard>
      </div>
    )
  }
}

export default Form
