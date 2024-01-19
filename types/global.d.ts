/**
 * ! Global Interface
 */

declare const daum: any

interface SignupFormData {
  [key: string]: string | number
}

interface DaumAddress {
  address: string
  addressEnglish: string
  addressType: string
  apartment: string
  autoJibunAddress: string
  autoJibunAddressEnglish: string
  autoRoadAddress: string
  autoRoadAddressEnglish: string
  bcode: string
  bname: string
  bname1: string
  bname1English: string
  bname2: string
  bname2English: string
  bnameEnglish: string
  buildingCode: string
  buildingName: string
  hname: string
  jibunAddress: string
  jibunAddressEnglish: string
  noSelected: string
  postcode: string
  postcode1: string
  postcode2: string
  postcodeSeq: string
  query: string
  roadAddress: string
  roadAddressEnglish: string
  roadname: string
  roadnameCode: string
  roadnameEnglish: string
  sido: string
  sidoEnglish: string
  sigungu: string
  sigunguCode: string
  sigunguEnglish: string
  userLanguageType: string
  userSelectedType: string
  zonecode: string
}
