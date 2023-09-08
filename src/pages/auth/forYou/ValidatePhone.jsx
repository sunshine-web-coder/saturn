import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

// Example usage:
const phoneNumber = '+1 650-555-1234';
const isValid = isPhoneValid(phoneNumber);
console.log(`Is the phone number valid? ${isValid}`);
