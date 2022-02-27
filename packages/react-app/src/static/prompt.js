// https://github.com/talor-hammond/formik-react-hooks-multi-step-form

export default [
  {
    id: '1',
    category: 'general',
    text: 'What do you want to create a token for?',
    choices: ['business', 'personal residence', 'community project', 'other'],
    options: [
      {
        text: 'Want it to be singly or collectively owned and operated?',
        choices: ['single', 'collective']
      }
    ]
  },
]

// business
//     - want it to be singly owned and operated?  This looks like an NFT
//     - would you like to find investors for your business?
//     - is it actively in operation and generating revenue?
//     - important to be SEC compliant?

// residence
//     - single or multi-family
//     - lease or own
//     - room in house
//     - residence under construction
//     - soon to be residence (mortgage)

// collective
//     - How many people
//     - What rights are important to share?
//         - right of use
//         - underlying equity in land
//         - underlying equity in business on land
//         - voting and governance
//     - Do you already have your legal framework established
//     - equal ownership spread out across entire group or specifically
