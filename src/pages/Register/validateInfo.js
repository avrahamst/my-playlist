export default function validateInfo(values) {
  let errors = {};
  if (!values.firstName.trim()) {
    errors.firstName = "צריך להזין שם פרטי";
  }
  if (!values.lastName.trim()) {
    errors.lastName = "צריך להזין שם משפחה";
  }
  if (!values.phone) {
    errors.phone = "צריך להזין מספר טלפון";
  } else if (!/^0\d([\d]{0,1})([-]{0,1})\d{7}$/.test(values.phone)) {
    errors.phone = "מספר טלפון לא תקין";
  }

  if (!values.email) {
    errors.email = "צריך להזין אימייל";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "אימייל לא חוקי";
  }
  if (!values.password) {
    errors.password = "צריך להזין  סיסמאה";
  } else if (values.password.length < 6) {
    errors.password = "הסיסמה צריכה היות לפחות 6 תויים";
  }

  if (!values.password2) {
    errors.password2 = "צריך להזין אימות סיסמאה";
  } else if (values.password2 !== values.password) {
    errors.password2 = "הסיסמאות לא תואמות";
  }
  return errors;
}
