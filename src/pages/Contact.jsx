import React, { useState, useMemo, useRef, useEffect } from 'react'
import FooterSection from '../components/home/FooterSection'
import PageHero from '../components/common/PageHero'
import LottieVisual from '../components/common/LottieVisual'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
    const { t, language } = useLanguage()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        countryCode: '+352',
        phone: '',
        sector: '',
        message: ''
    })

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    const countryCodes = [
        { code: '+93', country: 'AF', flag: '🇦🇫', name: 'Afghanistan' },
        { code: '+355', country: 'AL', flag: '🇦🇱', name: 'Albania' },
        { code: '+213', country: 'DZ', flag: '🇩🇿', name: 'Algeria' },
        { code: '+1-684', country: 'AS', flag: '🇦🇸', name: 'American Samoa' },
        { code: '+376', country: 'AD', flag: '🇦🇩', name: 'Andorra' },
        { code: '+244', country: 'AO', flag: '🇦🇴', name: 'Angola' },
        { code: '+1-264', country: 'AI', flag: '🇦🇮', name: 'Anguilla' },
        { code: '+672', country: 'AQ', flag: '🇦🇶', name: 'Antarctica' },
        { code: '+1-268', country: 'AG', flag: '🇦🇬', name: 'Antigua and Barbuda' },
        { code: '+54', country: 'AR', flag: '🇦🇷', name: 'Argentina' },
        { code: '+374', country: 'AM', flag: '🇦🇲', name: 'Armenia' },
        { code: '+297', country: 'AW', flag: '🇦🇼', name: 'Aruba' },
        { code: '+61', country: 'AU', flag: '🇦🇺', name: 'Australia' },
        { code: '+43', country: 'AT', flag: '🇦🇹', name: 'Austria' },
        { code: '+994', country: 'AZ', flag: '🇦🇿', name: 'Azerbaijan' },
        { code: '+1-242', country: 'BS', flag: '🇧🇸', name: 'Bahamas' },
        { code: '+973', country: 'BH', flag: '🇧🇭', name: 'Bahrain' },
        { code: '+880', country: 'BD', flag: '🇧🇩', name: 'Bangladesh' },
        { code: '+1-246', country: 'BB', flag: '🇧🇧', name: 'Barbados' },
        { code: '+375', country: 'BY', flag: '🇧🇾', name: 'Belarus' },
        { code: '+32', country: 'BE', flag: '🇧🇪', name: 'Belgium' },
        { code: '+501', country: 'BZ', flag: '🇧🇿', name: 'Belize' },
        { code: '+229', country: 'BJ', flag: '🇧🇯', name: 'Benin' },
        { code: '+1-441', country: 'BM', flag: '🇧🇲', name: 'Bermuda' },
        { code: '+975', country: 'BT', flag: '🇧🇹', name: 'Bhutan' },
        { code: '+591', country: 'BO', flag: '🇧🇴', name: 'Bolivia' },
        { code: '+387', country: 'BA', flag: '🇧🇦', name: 'Bosnia and Herzegovina' },
        { code: '+267', country: 'BW', flag: '🇧🇼', name: 'Botswana' },
        { code: '+55', country: 'BR', flag: '🇧🇷', name: 'Brazil' },
        { code: '+246', country: 'IO', flag: '🇮🇴', name: 'British Indian Ocean Territory' },
        { code: '+1-284', country: 'VG', flag: '🇻🇬', name: 'British Virgin Islands' },
        { code: '+673', country: 'BN', flag: '🇧🇳', name: 'Brunei' },
        { code: '+359', country: 'BG', flag: '🇧🇬', name: 'Bulgaria' },
        { code: '+226', country: 'BF', flag: '🇧🇫', name: 'Burkina Faso' },
        { code: '+257', country: 'BI', flag: '🇧🇮', name: 'Burundi' },
        { code: '+855', country: 'KH', flag: '🇰🇭', name: 'Cambodia' },
        { code: '+237', country: 'CM', flag: '🇨🇲', name: 'Cameroon' },
        { code: '+1', country: 'CA', flag: '🇨🇦', name: 'Canada' },
        { code: '+238', country: 'CV', flag: '🇨🇻', name: 'Cape Verde' },
        { code: '+1-345', country: 'KY', flag: '🇰🇾', name: 'Cayman Islands' },
        { code: '+236', country: 'CF', flag: '🇨🇫', name: 'Central African Republic' },
        { code: '+235', country: 'TD', flag: '🇹🇩', name: 'Chad' },
        { code: '+56', country: 'CL', flag: '🇨🇱', name: 'Chile' },
        { code: '+86', country: 'CN', flag: '🇨🇳', name: 'China' },
        { code: '+61', country: 'CX', flag: '🇨🇽', name: 'Christmas Island' },
        { code: '+61', country: 'CC', flag: '🇨🇨', name: 'Cocos (Keeling) Islands' },
        { code: '+57', country: 'CO', flag: '🇨🇴', name: 'Colombia' },
        { code: '+269', country: 'KM', flag: '🇰🇲', name: 'Comoros' },
        { code: '+682', country: 'CK', flag: '🇨🇰', name: 'Cook Islands' },
        { code: '+506', country: 'CR', flag: '🇨🇷', name: 'Costa Rica' },
        { code: '+385', country: 'HR', flag: '🇭🇷', name: 'Croatia' },
        { code: '+53', country: 'CU', flag: '🇨🇺', name: 'Cuba' },
        { code: '+599', country: 'CW', flag: '🇨🇼', name: 'Curaçao' },
        { code: '+357', country: 'CY', flag: '🇨🇾', name: 'Cyprus' },
        { code: '+420', country: 'CZ', flag: '🇨🇿', name: 'Czech Republic' },
        { code: '+243', country: 'CD', flag: '🇨🇩', name: 'Democratic Republic of the Congo' },
        { code: '+45', country: 'DK', flag: '🇩🇰', name: 'Denmark' },
        { code: '+253', country: 'DJ', flag: '🇩🇯', name: 'Djibouti' },
        { code: '+1-767', country: 'DM', flag: '🇩🇲', name: 'Dominica' },
        { code: '+1-809', country: 'DO', flag: '🇩🇴', name: 'Dominican Republic' },
        { code: '+670', country: 'TL', flag: '🇹🇱', name: 'East Timor' },
        { code: '+593', country: 'EC', flag: '🇪🇨', name: 'Ecuador' },
        { code: '+20', country: 'EG', flag: '🇪🇬', name: 'Egypt' },
        { code: '+503', country: 'SV', flag: '🇸🇻', name: 'El Salvador' },
        { code: '+240', country: 'GQ', flag: '🇬🇶', name: 'Equatorial Guinea' },
        { code: '+291', country: 'ER', flag: '🇪🇷', name: 'Eritrea' },
        { code: '+372', country: 'EE', flag: '🇪🇪', name: 'Estonia' },
        { code: '+251', country: 'ET', flag: '🇪🇹', name: 'Ethiopia' },
        { code: '+500', country: 'FK', flag: '🇫🇰', name: 'Falkland Islands' },
        { code: '+298', country: 'FO', flag: '🇫🇴', name: 'Faroe Islands' },
        { code: '+679', country: 'FJ', flag: '🇫🇯', name: 'Fiji' },
        { code: '+358', country: 'FI', flag: '🇫🇮', name: 'Finland' },
        { code: '+33', country: 'FR', flag: '🇫🇷', name: 'France' },
        { code: '+594', country: 'GF', flag: '🇬🇫', name: 'French Guiana' },
        { code: '+689', country: 'PF', flag: '🇵🇫', name: 'French Polynesia' },
        { code: '+241', country: 'GA', flag: '🇬🇦', name: 'Gabon' },
        { code: '+220', country: 'GM', flag: '🇬🇲', name: 'Gambia' },
        { code: '+995', country: 'GE', flag: '🇬🇪', name: 'Georgia' },
        { code: '+49', country: 'DE', flag: '🇩🇪', name: 'Germany' },
        { code: '+233', country: 'GH', flag: '🇬🇭', name: 'Ghana' },
        { code: '+350', country: 'GI', flag: '🇬🇮', name: 'Gibraltar' },
        { code: '+30', country: 'GR', flag: '🇬🇷', name: 'Greece' },
        { code: '+299', country: 'GL', flag: '🇬🇱', name: 'Greenland' },
        { code: '+1-473', country: 'GD', flag: '🇬🇩', name: 'Grenada' },
        { code: '+590', country: 'GP', flag: '🇬🇵', name: 'Guadeloupe' },
        { code: '+1-671', country: 'GU', flag: '🇬🇺', name: 'Guam' },
        { code: '+502', country: 'GT', flag: '🇬🇹', name: 'Guatemala' },
        { code: '+44-1481', country: 'GG', flag: '🇬🇬', name: 'Guernsey' },
        { code: '+224', country: 'GN', flag: '🇬🇳', name: 'Guinea' },
        { code: '+245', country: 'GW', flag: '🇬🇼', name: 'Guinea-Bissau' },
        { code: '+592', country: 'GY', flag: '🇬🇾', name: 'Guyana' },
        { code: '+509', country: 'HT', flag: '🇭🇹', name: 'Haiti' },
        { code: '+504', country: 'HN', flag: '🇭🇳', name: 'Honduras' },
        { code: '+852', country: 'HK', flag: '🇭🇰', name: 'Hong Kong' },
        { code: '+36', country: 'HU', flag: '🇭🇺', name: 'Hungary' },
        { code: '+354', country: 'IS', flag: '🇮🇸', name: 'Iceland' },
        { code: '+91', country: 'IN', flag: '🇮🇳', name: 'India' },
        { code: '+62', country: 'ID', flag: '🇮🇩', name: 'Indonesia' },
        { code: '+98', country: 'IR', flag: '🇮🇷', name: 'Iran' },
        { code: '+964', country: 'IQ', flag: '🇮🇶', name: 'Iraq' },
        { code: '+353', country: 'IE', flag: '🇮🇪', name: 'Ireland' },
        { code: '+44-1624', country: 'IM', flag: '🇮🇲', name: 'Isle of Man' },
        { code: '+972', country: 'IL', flag: '🇮🇱', name: 'Israel' },
        { code: '+39', country: 'IT', flag: '🇮🇹', name: 'Italy' },
        { code: '+225', country: 'CI', flag: '🇨🇮', name: 'Ivory Coast' },
        { code: '+1-876', country: 'JM', flag: '🇯🇲', name: 'Jamaica' },
        { code: '+81', country: 'JP', flag: '🇯🇵', name: 'Japan' },
        { code: '+44-1534', country: 'JE', flag: '🇯🇪', name: 'Jersey' },
        { code: '+962', country: 'JO', flag: '🇯🇴', name: 'Jordan' },
        { code: '+7', country: 'KZ', flag: '🇰🇿', name: 'Kazakhstan' },
        { code: '+254', country: 'KE', flag: '🇰🇪', name: 'Kenya' },
        { code: '+686', country: 'KI', flag: '🇰🇮', name: 'Kiribati' },
        { code: '+383', country: 'XK', flag: '🇽🇰', name: 'Kosovo' },
        { code: '+965', country: 'KW', flag: '🇰🇼', name: 'Kuwait' },
        { code: '+996', country: 'KG', flag: '🇰🇬', name: 'Kyrgyzstan' },
        { code: '+856', country: 'LA', flag: '🇱🇦', name: 'Laos' },
        { code: '+371', country: 'LV', flag: '🇱🇻', name: 'Latvia' },
        { code: '+961', country: 'LB', flag: '🇱🇧', name: 'Lebanon' },
        { code: '+266', country: 'LS', flag: '🇱🇸', name: 'Lesotho' },
        { code: '+231', country: 'LR', flag: '🇱🇷', name: 'Liberia' },
        { code: '+218', country: 'LY', flag: '🇱🇾', name: 'Libya' },
        { code: '+423', country: 'LI', flag: '🇱🇮', name: 'Liechtenstein' },
        { code: '+370', country: 'LT', flag: '🇱🇹', name: 'Lithuania' },
        { code: '+352', country: 'LU', flag: '🇱🇺', name: 'Luxembourg' },
        { code: '+853', country: 'MO', flag: '🇲🇴', name: 'Macau' },
        { code: '+389', country: 'MK', flag: '🇲🇰', name: 'Macedonia' },
        { code: '+261', country: 'MG', flag: '🇲🇬', name: 'Madagascar' },
        { code: '+265', country: 'MW', flag: '🇲🇼', name: 'Malawi' },
        { code: '+60', country: 'MY', flag: '🇲🇾', name: 'Malaysia' },
        { code: '+960', country: 'MV', flag: '🇲🇻', name: 'Maldives' },
        { code: '+223', country: 'ML', flag: '🇲🇱', name: 'Mali' },
        { code: '+356', country: 'MT', flag: '🇲🇹', name: 'Malta' },
        { code: '+692', country: 'MH', flag: '🇲🇭', name: 'Marshall Islands' },
        { code: '+596', country: 'MQ', flag: '🇲🇶', name: 'Martinique' },
        { code: '+222', country: 'MR', flag: '🇲🇷', name: 'Mauritania' },
        { code: '+230', country: 'MU', flag: '🇲🇺', name: 'Mauritius' },
        { code: '+262', country: 'YT', flag: '🇾🇹', name: 'Mayotte' },
        { code: '+52', country: 'MX', flag: '🇲🇽', name: 'Mexico' },
        { code: '+691', country: 'FM', flag: '🇫🇲', name: 'Micronesia' },
        { code: '+373', country: 'MD', flag: '🇲🇩', name: 'Moldova' },
        { code: '+377', country: 'MC', flag: '🇲🇨', name: 'Monaco' },
        { code: '+976', country: 'MN', flag: '🇲🇳', name: 'Mongolia' },
        { code: '+382', country: 'ME', flag: '🇲🇪', name: 'Montenegro' },
        { code: '+1-664', country: 'MS', flag: '🇲🇸', name: 'Montserrat' },
        { code: '+212', country: 'MA', flag: '🇲🇦', name: 'Morocco' },
        { code: '+258', country: 'MZ', flag: '🇲🇿', name: 'Mozambique' },
        { code: '+95', country: 'MM', flag: '🇲🇲', name: 'Myanmar' },
        { code: '+264', country: 'NA', flag: '🇳🇦', name: 'Namibia' },
        { code: '+674', country: 'NR', flag: '🇳🇷', name: 'Nauru' },
        { code: '+977', country: 'NP', flag: '🇳🇵', name: 'Nepal' },
        { code: '+31', country: 'NL', flag: '🇳🇱', name: 'Netherlands' },
        { code: '+599', country: 'AN', flag: '🇳🇱', name: 'Netherlands Antilles' },
        { code: '+687', country: 'NC', flag: '🇳🇨', name: 'New Caledonia' },
        { code: '+64', country: 'NZ', flag: '🇳🇿', name: 'New Zealand' },
        { code: '+505', country: 'NI', flag: '🇳🇮', name: 'Nicaragua' },
        { code: '+227', country: 'NE', flag: '🇳🇪', name: 'Niger' },
        { code: '+234', country: 'NG', flag: '🇳🇬', name: 'Nigeria' },
        { code: '+683', country: 'NU', flag: '🇳🇺', name: 'Niue' },
        { code: '+850', country: 'KP', flag: '🇰🇵', name: 'North Korea' },
        { code: '+1-670', country: 'MP', flag: '🇲🇵', name: 'Northern Mariana Islands' },
        { code: '+47', country: 'NO', flag: '🇳🇴', name: 'Norway' },
        { code: '+968', country: 'OM', flag: '🇴🇲', name: 'Oman' },
        { code: '+92', country: 'PK', flag: '🇵🇰', name: 'Pakistan' },
        { code: '+680', country: 'PW', flag: '🇵🇼', name: 'Palau' },
        { code: '+970', country: 'PS', flag: '🇵🇸', name: 'Palestine' },
        { code: '+507', country: 'PA', flag: '🇵🇦', name: 'Panama' },
        { code: '+675', country: 'PG', flag: '🇵🇬', name: 'Papua New Guinea' },
        { code: '+595', country: 'PY', flag: '🇵🇾', name: 'Paraguay' },
        { code: '+51', country: 'PE', flag: '🇵🇪', name: 'Peru' },
        { code: '+63', country: 'PH', flag: '🇵🇭', name: 'Philippines' },
        { code: '+64', country: 'PN', flag: '🇵🇳', name: 'Pitcairn' },
        { code: '+48', country: 'PL', flag: '🇵🇱', name: 'Poland' },
        { code: '+351', country: 'PT', flag: '🇵🇹', name: 'Portugal' },
        { code: '+1-787', country: 'PR', flag: '🇵🇷', name: 'Puerto Rico' },
        { code: '+974', country: 'QA', flag: '🇶🇦', name: 'Qatar' },
        { code: '+242', country: 'CG', flag: '🇨🇬', name: 'Republic of the Congo' },
        { code: '+262', country: 'RE', flag: '🇷🇪', name: 'Reunion' },
        { code: '+40', country: 'RO', flag: '🇷🇴', name: 'Romania' },
        { code: '+7', country: 'RU', flag: '🇷🇺', name: 'Russia' },
        { code: '+250', country: 'RW', flag: '🇷🇼', name: 'Rwanda' },
        { code: '+590', country: 'BL', flag: '🇧🇱', name: 'Saint Barthélemy' },
        { code: '+290', country: 'SH', flag: '🇸🇭', name: 'Saint Helena' },
        { code: '+1-869', country: 'KN', flag: '🇰🇳', name: 'Saint Kitts and Nevis' },
        { code: '+1-758', country: 'LC', flag: '🇱🇨', name: 'Saint Lucia' },
        { code: '+590', country: 'MF', flag: '🇲🇫', name: 'Saint Martin' },
        { code: '+508', country: 'PM', flag: '🇵🇲', name: 'Saint Pierre and Miquelon' },
        { code: '+1-784', country: 'VC', flag: '🇻🇨', name: 'Saint Vincent and the Grenadines' },
        { code: '+685', country: 'WS', flag: '🇼🇸', name: 'Samoa' },
        { code: '+378', country: 'SM', flag: '🇸🇲', name: 'San Marino' },
        { code: '+239', country: 'ST', flag: '🇸🇹', name: 'Sao Tome and Principe' },
        { code: '+966', country: 'SA', flag: '🇸🇦', name: 'Saudi Arabia' },
        { code: '+221', country: 'SN', flag: '🇸🇳', name: 'Senegal' },
        { code: '+381', country: 'RS', flag: '🇷🇸', name: 'Serbia' },
        { code: '+248', country: 'SC', flag: '🇸🇨', name: 'Seychelles' },
        { code: '+232', country: 'SL', flag: '🇸🇱', name: 'Sierra Leone' },
        { code: '+65', country: 'SG', flag: '🇸🇬', name: 'Singapore' },
        { code: '+1-721', country: 'SX', flag: '🇸🇽', name: 'Sint Maarten' },
        { code: '+421', country: 'SK', flag: '🇸🇰', name: 'Slovakia' },
        { code: '+386', country: 'SI', flag: '🇸🇮', name: 'Slovenia' },
        { code: '+677', country: 'SB', flag: '🇸🇧', name: 'Solomon Islands' },
        { code: '+252', country: 'SO', flag: '🇸🇴', name: 'Somalia' },
        { code: '+27', country: 'ZA', flag: '🇿🇦', name: 'South Africa' },
        { code: '+82', country: 'KR', flag: '🇰🇷', name: 'South Korea' },
        { code: '+211', country: 'SS', flag: '🇸🇸', name: 'South Sudan' },
        { code: '+34', country: 'ES', flag: '🇪🇸', name: 'Spain' },
        { code: '+94', country: 'LK', flag: '🇱🇰', name: 'Sri Lanka' },
        { code: '+249', country: 'SD', flag: '🇸🇩', name: 'Sudan' },
        { code: '+597', country: 'SR', flag: '🇸🇷', name: 'Suriname' },
        { code: '+47', country: 'SJ', flag: '🇸🇯', name: 'Svalbard and Jan Mayen' },
        { code: '+268', country: 'SZ', flag: '🇸🇿', name: 'Swaziland' },
        { code: '+46', country: 'SE', flag: '🇸🇪', name: 'Sweden' },
        { code: '+41', country: 'CH', flag: '🇨🇭', name: 'Switzerland' },
        { code: '+963', country: 'SY', flag: '🇸🇾', name: 'Syria' },
        { code: '+886', country: 'TW', flag: '🇹🇼', name: 'Taiwan' },
        { code: '+992', country: 'TJ', flag: '🇹🇯', name: 'Tajikistan' },
        { code: '+255', country: 'TZ', flag: '🇹🇿', name: 'Tanzania' },
        { code: '+66', country: 'TH', flag: '🇹🇭', name: 'Thailand' },
        { code: '+228', country: 'TG', flag: '🇹🇬', name: 'Togo' },
        { code: '+690', country: 'TK', flag: '🇹🇰', name: 'Tokelau' },
        { code: '+676', country: 'TO', flag: '🇹🇴', name: 'Tonga' },
        { code: '+1-868', country: 'TT', flag: '🇹🇹', name: 'Trinidad and Tobago' },
        { code: '+216', country: 'TN', flag: '🇹🇳', name: 'Tunisia' },
        { code: '+90', country: 'TR', flag: '🇹🇷', name: 'Turkey' },
        { code: '+993', country: 'TM', flag: '🇹🇲', name: 'Turkmenistan' },
        { code: '+1-649', country: 'TC', flag: '🇹🇨', name: 'Turks and Caicos Islands' },
        { code: '+688', country: 'TV', flag: '🇹🇻', name: 'Tuvalu' },
        { code: '+1-340', country: 'VI', flag: '🇻🇮', name: 'U.S. Virgin Islands' },
        { code: '+256', country: 'UG', flag: '🇺🇬', name: 'Uganda' },
        { code: '+380', country: 'UA', flag: '🇺🇦', name: 'Ukraine' },
        { code: '+971', country: 'AE', flag: '🇦🇪', name: 'United Arab Emirates' },
        { code: '+44', country: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
        { code: '+1', country: 'US', flag: '🇺🇸', name: 'United States' },
        { code: '+598', country: 'UY', flag: '🇺🇾', name: 'Uruguay' },
        { code: '+998', country: 'UZ', flag: '🇺🇿', name: 'Uzbekistan' },
        { code: '+678', country: 'VU', flag: '🇻🇺', name: 'Vanuatu' },
        { code: '+379', country: 'VA', flag: '🇻🇦', name: 'Vatican' },
        { code: '+58', country: 'VE', flag: '🇻🇪', name: 'Venezuela' },
        { code: '+84', country: 'VN', flag: '🇻🇳', name: 'Vietnam' },
        { code: '+681', country: 'WF', flag: '🇼🇫', name: 'Wallis and Futuna' },
        { code: '+212', country: 'EH', flag: '🇪🇭', name: 'Western Sahara' },
        { code: '+967', country: 'YE', flag: '🇾🇪', name: 'Yemen' },
        { code: '+260', country: 'ZM', flag: '🇿🇲', name: 'Zambia' },
        { code: '+263', country: 'ZW', flag: '🇿🇼', name: 'Zimbabwe' }
    ]

    const selectedCountry = countryCodes.find(c => c.code === formData.countryCode) || countryCodes[0]

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleCountrySelect = (code) => {
        setFormData({ ...formData, countryCode: code })
        setIsDropdownOpen(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: `${formData.countryCode} ${formData.phone}`,
                    language: language,
                    query: `Message: ${formData.message} | Company: ${formData.company} | Sector: ${formData.sector}`,
                    source: 'contact_form'
                })
            });

            if (response.ok) {
                alert(t('contact.success') || 'Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    countryCode: '+352',
                    phone: '',
                    sector: '',
                    message: ''
                });
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    const contactInfo = useMemo(() => [
        {
            icon: '✉️',
            label: t('contact.formEmail'),
            value: 'contact@luxiomedia.lu',
            link: 'mailto:contact@luxiomedia.lu'
        },
        {
            icon: '📞',
            label: t('contact.formPhone'),
            value: '+352 661 16 77 25',
            link: 'tel:+352661167725'
        },
        {
            icon: '📍',
            label: t('contact.address'),
            value: '26 Bd Royal, L-2449 Luxembourg',
            link: '#'
        }
    ], [t])

    const sectors = t('contact.sectorsList', { returnObjects: true }) || []

    return (
        <div className='bg-[#050505] text-white min-h-screen overflow-x-hidden'>
            {/* Hero Section */}
            <PageHero
                title={t('contact.heroTitle')}
                highlight={t('contact.heroTitleHighlight')}
                description={t('contact.intro')}
                ctaText={t('contact.formTitle')}
                ctaLink="#contact-form"
                visual={<LottieVisual url="https://assets10.lottiefiles.com/packages/lf20_u25cckyh.json" />}
            />

            {/* Contact Content - High Contrast Redesign */}
            <section id="contact-form" className='relative py-12 lg:py-20 px-6'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-12 lg:gap-24'>

                        {/* Left Side - Visual Info */}
                        <div className='space-y-12 lg:sticky lg:top-32 h-fit'>
                            <div>
                                <h2 className='font-[font2] text-4xl lg:text-7xl uppercase tracking-tighter leading-none mb-8'>
                                    {t('contact.desc', { returnObjects: true })?.toString().replace(/local.*$/, '')}<br />
                                    <span className='text-[#D3FD50]'>{t('contact.desc')?.split(' ').slice(-2).join(' ')}</span>
                                </h2>
                                <p className='font-[font1] text-white/40 text-lg lg:text-xl leading-relaxed max-w-lg'>
                                    Nous sommes basés au cœur du centre financier de l'Europe pour propulser votre visibilité régionale.
                                </p>
                            </div>

                            <div className='grid gap-1'>
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link}
                                        className='group flex items-center gap-6 p-8 bg-white/[0.02] border border-white/5 hover:bg-[#D3FD50]/5 hover:border-[#D3FD50]/30 transition-all duration-500'
                                    >
                                        <div className='text-3xl grayscale group-hover:grayscale-0 transition-all'>{info.icon}</div>
                                        <div>
                                            <span className='text-white/20 text-[10px] uppercase tracking-[0.4em] block mb-1'>
                                                {info.label}
                                            </span>
                                            <span className='font-[font2] text-white uppercase tracking-tight text-lg group-hover:text-[#D3FD50] transition-colors'>
                                                {info.value}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className='flex gap-1'>
                                {['linkedin', 'instagram', 'facebook'].map((social) => (
                                    <a
                                        key={social}
                                        href='#'
                                        className='flex-1 py-4 border border-white/5 bg-white/[0.01] text-center font-[font2] text-[10px] uppercase tracking-[0.3em] text-white/20 hover:text-[#D3FD50] hover:bg-[#D3FD50]/5 transition-all'
                                    >
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Premium Form */}
                        <div className='relative'>
                            <div className='p-5 md:p-8 lg:p-16 rounded-[40px] border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-2xl relative overflow-hidden'>
                                <div className='absolute -top-32 -right-32 w-64 h-64 bg-[#D3FD50]/5 rounded-full blur-[80px]' />

                                <h3 className='font-[font2] text-2xl lg:text-3xl uppercase mb-10 tracking-tight'>
                                    {t('contact.formTitle')}
                                </h3>

                                <form onSubmit={handleSubmit} className='space-y-8'>
                                    <div className='grid md:grid-cols-2 gap-8'>
                                        <div className='space-y-2'>
                                            <label className='text-white/20 text-[10px] font-[font2] uppercase tracking-[0.3em] ml-1'>{t('contact.formName')}</label>
                                            <input
                                                type='text'
                                                name='name'
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:border-[#D3FD50] focus:outline-none transition-all'
                                                placeholder={t('contact.placeholders.name')}
                                            />
                                        </div>
                                        <div className='space-y-2'>
                                            <label className='text-white/20 text-[10px] font-[font2] uppercase tracking-[0.3em] ml-1'>{t('contact.formEmail')}</label>
                                            <input
                                                type='email'
                                                name='email'
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:border-[#D3FD50] focus:outline-none transition-all'
                                                placeholder={t('contact.placeholders.email')}
                                            />
                                        </div>
                                    </div>

                                    <div className='space-y-2'>
                                        <label className='text-white/20 text-[10px] font-[font2] uppercase tracking-[0.3em] ml-1'>{t('contact.formCompany')}</label>
                                        <input
                                            type='text'
                                            name='company'
                                            value={formData.company}
                                            onChange={handleChange}
                                            className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:border-[#D3FD50] focus:outline-none transition-all'
                                            placeholder={t('contact.placeholders.company')}
                                        />
                                    </div>

                                    <div className='space-y-2'>
                                        <label className='text-white/20 text-[10px] font-[font2] uppercase tracking-[0.3em] ml-1'>{t('contact.formPhone')}</label>
                                        <div className='flex gap-2 lg:gap-4 relative w-full'>
                                            <div ref={dropdownRef} className='relative w-28 lg:w-36 shrink-0'>
                                                <button
                                                    type='button'
                                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                    className='w-full h-full flex items-center justify-between px-3 lg:px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:border-[#D3FD50]/50 transition-all'
                                                >
                                                    <span className='flex items-center gap-2 lg:gap-3'>
                                                        <img
                                                            src={`https://flagcdn.com/w40/${selectedCountry.country.toLowerCase()}.png`}
                                                            srcSet={`https://flagcdn.com/w80/${selectedCountry.country.toLowerCase()}.png 2x`}
                                                            width="24"
                                                            height="18"
                                                            alt={selectedCountry.name}
                                                            className="rounded-sm object-cover"
                                                            loading="lazy"
                                                        />
                                                        <span className='text-sm font-bold tracking-wide'>{selectedCountry.code}</span>
                                                    </span>
                                                    <svg className={`w-3 h-3 text-[#D3FD50] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                                                    </svg>
                                                </button>
                                                {isDropdownOpen && (
                                                    <div className='absolute bottom-full left-0 mb-2 w-80 max-h-80 overflow-y-auto bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl z-50 p-2 custom-scrollbar'>
                                                        {countryCodes.map((c) => (
                                                            <button
                                                                key={c.code + c.country}
                                                                type='button'
                                                                onClick={() => handleCountrySelect(c.code)}
                                                                className='w-full flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-[#D3FD50]/10 text-left transition-all group'
                                                            >
                                                                <img
                                                                    src={`https://flagcdn.com/w40/${c.country.toLowerCase()}.png`}
                                                                    width="24"
                                                                    height="18"
                                                                    alt={c.country}
                                                                    className="rounded-sm opacity-80 group-hover:opacity-100 transition-opacity object-cover"
                                                                    loading="lazy"
                                                                />
                                                                <span className='text-sm font-bold text-white group-hover:text-[#D3FD50] min-w-[3.5rem]'>{c.code}</span>
                                                                <span className='text-xs text-white/50 group-hover:text-white/80 truncate'>{c.name}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <input
                                                type='tel'
                                                name='phone'
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className='flex-1 w-full min-w-0 px-4 lg:px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:border-[#D3FD50] focus:outline-none transition-all'
                                                placeholder={t('contact.placeholders.phone')}
                                            />
                                        </div>
                                    </div>

                                    <div className='space-y-2'>
                                        <label className='text-white/20 text-[10px] font-[font2] uppercase tracking-[0.3em] ml-1'>{t('contact.formSector')}</label>
                                        <select
                                            name='sector'
                                            value={formData.sector}
                                            onChange={handleChange}
                                            className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-[#D3FD50] focus:outline-none transition-all appearance-none cursor-pointer'
                                            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23D3FD50\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1rem' }}
                                        >
                                            <option value='' className='bg-black'>{t('contact.placeholders.sector')}</option>
                                            {Array.isArray(sectors) && sectors.map((sector) => (
                                                <option key={sector} value={sector} className='bg-black'>{sector}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className='space-y-2'>
                                        <label className='text-white/20 text-[10px] font-[font2] uppercase tracking-[0.3em] ml-1'>{t('contact.formMessage')}</label>
                                        <textarea
                                            name='message'
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:border-[#D3FD50] focus:outline-none transition-all resize-none'
                                            placeholder={t('contact.placeholders.message')}
                                        />
                                    </div>

                                    <button
                                        type='submit'
                                        className='w-full py-6 bg-[#D3FD50] text-black font-[font2] text-xs uppercase tracking-[0.4em] rounded-full hover:bg-white hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_40px_rgba(211,253,80,0.2)]'
                                    >
                                        {t('contact.submit')}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default Contact
