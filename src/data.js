export const contractAddress = "0x452F22AC8251dd0105Fdc1DbD466fecFB6c8a14b";
export const thirdWebConfig = {
  id: "e743a17cfd6b5124891d6b70e605acd9",
  secret:
    "I6c1v_cXFwDxt66tfgt6vMLpZ70iKo9yFsJ6Ofr94f_dTGHlz8pwkN2hgNCPkrD-ytBr9SP2PH6_26BuF3Jc1A",
};
export const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "courtCaseFiles",
    outputs: [
      {
        internalType: "string",
        name: "ipfsURL",
        type: "string",
      },
      {
        internalType: "string",
        name: "ownerLevel",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "files",
    outputs: [
      {
        internalType: "string",
        name: "ipfsURL",
        type: "string",
      },
      {
        internalType: "string",
        name: "ownerLevel",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCourtCasesOfUser",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "id",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct Vaultify.CourtCase[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "caseId",
        type: "string",
      },
    ],
    name: "getFiles",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "ipfsURL",
            type: "string",
          },
          {
            internalType: "string",
            name: "ownerLevel",
            type: "string",
          },
        ],
        internalType: "struct Vaultify.File[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "courtCaseID",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "openCourtCases",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "authority",
        type: "string",
      },
    ],
    name: "registerUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "ipfsURL",
        type: "string",
      },
      {
        internalType: "string",
        name: "courtCaseID",
        type: "string",
      },
    ],
    name: "uploadFile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "authorityLevel",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
