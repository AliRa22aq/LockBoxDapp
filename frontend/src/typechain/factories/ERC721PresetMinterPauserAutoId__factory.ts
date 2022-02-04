/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721PresetMinterPauserAutoId,
  ERC721PresetMinterPauserAutoIdInterface,
} from "../ERC721PresetMinterPauserAutoId";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "baseTokenURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002be338038062002be38339810160408190526200003491620003e5565b8251839083906200004d90600290602085019062000294565b5080516200006390600390602084019062000294565b5050600c805460ff191690555080516200008590600e90602084019062000294565b506200009c60006200009662000103565b62000107565b620000cb7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66200009662000103565b620000fa7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a6200009662000103565b505050620004c5565b3390565b62000113828262000117565b5050565b6200012e82826200015a60201b62000a731760201c565b60008281526001602090815260409091206200015591839062000af8620001e4821b17901c565b505050565b62000166828262000204565b62000113576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001a062000103565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001fb836001600160a01b0384166200022d565b90505b92915050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60006200023b83836200027c565b6200027357508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001fe565b506000620001fe565b60009081526001919091016020526040902054151590565b828054620002a29062000472565b90600052602060002090601f016020900481019282620002c6576000855562000311565b82601f10620002e157805160ff191683800117855562000311565b8280016001018555821562000311579182015b8281111562000311578251825591602001919060010190620002f4565b506200031f92915062000323565b5090565b5b808211156200031f576000815560010162000324565b600082601f8301126200034b578081fd5b81516001600160401b0380821115620003685762000368620004af565b6040516020601f8401601f1916820181018381118382101715620003905762000390620004af565b6040528382528584018101871015620003a7578485fd5b8492505b83831015620003ca5785830181015182840182015291820191620003ab565b83831115620003db57848185840101525b5095945050505050565b600080600060608486031215620003fa578283fd5b83516001600160401b038082111562000411578485fd5b6200041f878388016200033a565b9450602086015191508082111562000435578384fd5b62000443878388016200033a565b9350604086015191508082111562000459578283fd5b5062000468868287016200033a565b9150509250925092565b6002810460018216806200048757607f821691505b60208210811415620004a957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61270e80620004d56000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80636352211e1161010f578063a22cb465116100a2578063d539139311610071578063d5391393146103dd578063d547741f146103e5578063e63ab1e9146103f8578063e985e9c514610400576101e5565b8063a22cb46514610391578063b88d4fde146103a4578063c87b56dd146103b7578063ca15c873146103ca576101e5565b80639010d07c116100de5780639010d07c1461035b57806391d148541461036e57806395d89b4114610381578063a217fddf14610389576101e5565b80636352211e1461031a5780636a6278421461032d57806370a08231146103405780638456cb5914610353576101e5565b80632f2ff15d1161018757806342842e0e1161015657806342842e0e146102d957806342966c68146102ec5780634f6ccce7146102ff5780635c975abb14610312576101e5565b80632f2ff15d146102985780632f745c59146102ab57806336568abe146102be5780633f4ba83a146102d1576101e5565b8063095ea7b3116101c3578063095ea7b31461024857806318160ddd1461025d57806323b872dd14610272578063248a9ca314610285576101e5565b806301ffc9a7146101ea57806306fdde0314610213578063081812fc14610228575b600080fd5b6101fd6101f8366004611d3d565b610413565b60405161020a9190611e96565b60405180910390f35b61021b610426565b60405161020a9190611eaa565b61023b610236366004611ce2565b6104b8565b60405161020a9190611e45565b61025b610256366004611cb9565b610504565b005b61026561059c565b60405161020a9190611ea1565b61025b610280366004611b78565b6105a2565b610265610293366004611ce2565b6105da565b61025b6102a6366004611cfa565b6105ef565b6102656102b9366004611cb9565b610613565b61025b6102cc366004611cfa565b610668565b61025b6106ae565b61025b6102e7366004611b78565b610700565b61025b6102fa366004611ce2565b61071b565b61026561030d366004611ce2565b61074e565b6101fd6107a9565b61023b610328366004611ce2565b6107b2565b61025b61033b366004611b2c565b6107e7565b61026561034e366004611b2c565b610804565b61025b610848565b61023b610369366004611d1c565b610898565b6101fd61037c366004611cfa565b6108b7565b61021b6108e0565b6102656108ef565b61025b61039f366004611c7f565b6108f4565b61025b6103b2366004611bb3565b610906565b61021b6103c5366004611ce2565b610945565b6102656103d8366004611ce2565b6109c7565b6102656109de565b61025b6103f3366004611cfa565b610a02565b610265610a21565b6101fd61040e366004611b46565b610a45565b600061041e82610b0d565b90505b919050565b60606002805461043590612616565b80601f016020809104026020016040519081016040528092919081815260200182805461046190612616565b80156104ae5780601f10610483576101008083540402835291602001916104ae565b820191906000526020600020905b81548152906001019060200180831161049157829003601f168201915b5050505050905090565b60006104c382610b32565b6104e85760405162461bcd60e51b81526004016104df906122b2565b60405180910390fd5b506000908152600660205260409020546001600160a01b031690565b600061050f826107b2565b9050806001600160a01b0316836001600160a01b031614156105435760405162461bcd60e51b81526004016104df90612396565b806001600160a01b0316610555610b4f565b6001600160a01b0316148061057157506105718161040e610b4f565b61058d5760405162461bcd60e51b81526004016104df9061218d565b6105978383610b53565b505050565b600a5490565b6105b36105ad610b4f565b82610bc1565b6105cf5760405162461bcd60e51b81526004016104df906123d7565b610597838383610c46565b60009081526020819052604090206001015490565b6105f8826105da565b61060981610604610b4f565b610d73565b6105978383610dd7565b600061061e83610804565b821061063c5760405162461bcd60e51b81526004016104df90611f6b565b506001600160a01b03821660009081526008602090815260408083208484529091529020545b92915050565b610670610b4f565b6001600160a01b0316816001600160a01b0316146106a05760405162461bcd60e51b81526004016104df90612522565b6106aa8282610df9565b5050565b6106da7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a61037c610b4f565b6106f65760405162461bcd60e51b81526004016104df906124c4565b6106fe610e1b565b565b61059783838360405180602001604052806000815250610906565b6107266105ad610b4f565b6107425760405162461bcd60e51b81526004016104df90612474565b61074b81610e89565b50565b600061075861059c565b82106107765760405162461bcd60e51b81526004016104df90612428565b600a828154811061079757634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050919050565b600c5460ff1690565b6000818152600460205260408120546001600160a01b03168061041e5760405162461bcd60e51b81526004016104df90612234565b6107fa816107f5600d610f30565b610f34565b61074b600d611013565b60006001600160a01b03821661082c5760405162461bcd60e51b81526004016104df906121ea565b506001600160a01b031660009081526005602052604090205490565b6108747f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a61037c610b4f565b6108905760405162461bcd60e51b81526004016104df9061203f565b6106fe61101c565b60008281526001602052604081206108b09083611077565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60606003805461043590612616565b600081565b6106aa6108ff610b4f565b8383611083565b610917610911610b4f565b83610bc1565b6109335760405162461bcd60e51b81526004016104df906123d7565b61093f84848484611126565b50505050565b606061095082610b32565b61096c5760405162461bcd60e51b81526004016104df90612347565b6000610976611159565b9050600081511161099657604051806020016040528060008152506108b0565b806109a084611168565b6040516020016109b1929190611da1565b6040516020818303038152906040529392505050565b600081815260016020526040812061041e90611283565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b610a0b826105da565b610a1781610604610b4f565b6105978383610df9565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b610a7d82826108b7565b6106aa576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610ab4610b4f565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006108b0836001600160a01b03841661128e565b60006001600160e01b0319821663780e9d6360e01b148061041e575061041e826112d8565b6000908152600460205260409020546001600160a01b0316151590565b3390565b600081815260066020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610b88826107b2565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610bcc82610b32565b610be85760405162461bcd60e51b81526004016104df90612117565b6000610bf3836107b2565b9050806001600160a01b0316846001600160a01b03161480610c2e5750836001600160a01b0316610c23846104b8565b6001600160a01b0316145b80610c3e5750610c3e8185610a45565b949350505050565b826001600160a01b0316610c59826107b2565b6001600160a01b031614610c7f5760405162461bcd60e51b81526004016104df906122fe565b6001600160a01b038216610ca55760405162461bcd60e51b81526004016104df9061209c565b610cb0838383611318565b610cbb600082610b53565b6001600160a01b0383166000908152600560205260408120805460019290610ce49084906125bc565b90915550506001600160a01b0382166000908152600560205260408120805460019290610d12908490612571565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610d7d82826108b7565b6106aa57610d95816001600160a01b03166014611323565b610da0836020611323565b604051602001610db1929190611dd0565b60408051601f198184030181529082905262461bcd60e51b82526104df91600401611eaa565b610de18282610a73565b60008281526001602052604090206105979082610af8565b610e0382826114d5565b60008281526001602052604090206105979082611558565b610e236107a9565b610e3f5760405162461bcd60e51b81526004016104df90611f3d565b600c805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610e72610b4f565b604051610e7f9190611e45565b60405180910390a1565b6000610e94826107b2565b9050610ea281600084611318565b610ead600083610b53565b6001600160a01b0381166000908152600560205260408120805460019290610ed69084906125bc565b909155505060008281526004602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b5490565b6001600160a01b038216610f5a5760405162461bcd60e51b81526004016104df9061227d565b610f6381610b32565b15610f805760405162461bcd60e51b81526004016104df90612008565b610f8c60008383611318565b6001600160a01b0382166000908152600560205260408120805460019290610fb5908490612571565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b80546001019055565b6110246107a9565b156110415760405162461bcd60e51b81526004016104df90612163565b600c805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610e72610b4f565b60006108b0838361156d565b816001600160a01b0316836001600160a01b031614156110b55760405162461bcd60e51b81526004016104df906120e0565b6001600160a01b0383811660008181526007602090815260408083209487168084529490915290819020805460ff1916851515179055517f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190611119908590611e96565b60405180910390a3505050565b611131848484610c46565b61113d848484846115a5565b61093f5760405162461bcd60e51b81526004016104df90611fb6565b6060600e805461043590612616565b60608161118d57506040805180820190915260018152600360fc1b6020820152610421565b8160005b81156111b757806111a181612651565b91506111b09050600a83612589565b9150611191565b60008167ffffffffffffffff8111156111e057634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561120a576020820181803683370190505b5090505b8415610c3e5761121f6001836125bc565b915061122c600a8661266c565b611237906030612571565b60f81b81838151811061125a57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535061127c600a86612589565b945061120e565b600061041e82610f30565b600061129a83836116c0565b6112d057508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610662565b506000610662565b60006001600160e01b031982166380ac58cd60e01b148061130957506001600160e01b03198216635b5e139f60e01b145b8061041e575061041e826116d8565b6105978383836116fd565b6060600061133283600261259d565b61133d906002612571565b67ffffffffffffffff81111561136357634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561138d576020820181803683370190505b509050600360fc1b816000815181106113b657634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106113f357634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600061141784600261259d565b611422906001612571565b90505b60018111156114b6576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061146457634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061148857634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c936114af816125ff565b9050611425565b5083156108b05760405162461bcd60e51b81526004016104df90611ebd565b6114df82826108b7565b156106aa576000828152602081815260408083206001600160a01b03851684529091529020805460ff19169055611514610b4f565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b60006108b0836001600160a01b03841661172d565b600082600001828154811061159257634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b60006115b9846001600160a01b031661184a565b156116b557836001600160a01b031663150b7a026115d5610b4f565b8786866040518563ffffffff1660e01b81526004016115f79493929190611e59565b602060405180830381600087803b15801561161157600080fd5b505af1925050508015611641575060408051601f3d908101601f1916820190925261163e91810190611d59565b60015b61169b573d80801561166f576040519150601f19603f3d011682016040523d82523d6000602084013e611674565b606091505b5080516116935760405162461bcd60e51b81526004016104df90611fb6565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c3e565b506001949350505050565b60009081526001919091016020526040902054151590565b60006001600160e01b03198216635a05180f60e01b148061041e575061041e82611850565b611708838383611875565b6117106107a9565b156105975760405162461bcd60e51b81526004016104df90611ef2565b600081815260018301602052604081205480156118405760006117516001836125bc565b8554909150600090611765906001906125bc565b90508181146117e657600086600001828154811061179357634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050808760000184815481106117c457634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b855486908061180557634e487b7160e01b600052603160045260246000fd5b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610662565b6000915050610662565b3b151590565b60006001600160e01b03198216637965db0b60e01b148061041e575061041e826118fe565b611880838383610597565b6001600160a01b03831661189c5761189781611917565b6118bf565b816001600160a01b0316836001600160a01b0316146118bf576118bf838261195b565b6001600160a01b0382166118db576118d6816119f8565b610597565b826001600160a01b0316826001600160a01b031614610597576105978282611ad1565b6001600160e01b031981166301ffc9a760e01b14919050565b600a80546000838152600b60205260408120829055600182018355919091527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80155565b6000600161196884610804565b61197291906125bc565b6000838152600960205260409020549091508082146119c5576001600160a01b03841660009081526008602090815260408083208584528252808320548484528184208190558352600990915290208190555b5060009182526009602090815260408084208490556001600160a01b039094168352600881528383209183525290812055565b600a54600090611a0a906001906125bc565b6000838152600b6020526040812054600a8054939450909284908110611a4057634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080600a8381548110611a6f57634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255828152600b9091526040808220849055858252812055600a805480611ab557634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6000611adc83610804565b6001600160a01b039093166000908152600860209081526040808320868452825280832085905593825260099052919091209190915550565b80356001600160a01b038116811461042157600080fd5b600060208284031215611b3d578081fd5b6108b082611b15565b60008060408385031215611b58578081fd5b611b6183611b15565b9150611b6f60208401611b15565b90509250929050565b600080600060608486031215611b8c578081fd5b611b9584611b15565b9250611ba360208501611b15565b9150604084013590509250925092565b60008060008060808587031215611bc8578081fd5b611bd185611b15565b93506020611be0818701611b15565b935060408601359250606086013567ffffffffffffffff80821115611c03578384fd5b818801915088601f830112611c16578384fd5b813581811115611c2857611c286126ac565b604051601f8201601f1916810185018381118282101715611c4b57611c4b6126ac565b60405281815283820185018b1015611c61578586fd5b81858501868301379081019093019390935250939692955090935050565b60008060408385031215611c91578182fd5b611c9a83611b15565b915060208301358015158114611cae578182fd5b809150509250929050565b60008060408385031215611ccb578182fd5b611cd483611b15565b946020939093013593505050565b600060208284031215611cf3578081fd5b5035919050565b60008060408385031215611d0c578182fd5b82359150611b6f60208401611b15565b60008060408385031215611d2e578182fd5b50508035926020909101359150565b600060208284031215611d4e578081fd5b81356108b0816126c2565b600060208284031215611d6a578081fd5b81516108b0816126c2565b60008151808452611d8d8160208601602086016125d3565b601f01601f19169290920160200192915050565b60008351611db38184602088016125d3565b835190830190611dc78183602088016125d3565b01949350505050565b60007f416363657373436f6e74726f6c3a206163636f756e742000000000000000000082528351611e088160178501602088016125d3565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611e398160288401602088016125d3565b01602801949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611e8c90830184611d75565b9695505050505050565b901515815260200190565b90815260200190565b6000602082526108b06020830184611d75565b6020808252818101527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604082015260600190565b6020808252602b908201527f4552433732315061757361626c653a20746f6b656e207472616e73666572207760408201526a1a1a5b19481c185d5cd95960aa1b606082015260800190565b60208082526014908201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604082015260600190565b6020808252602b908201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560408201526a74206f6620626f756e647360a81b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252601c908201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604082015260600190565b6020808252603e908201527f4552433732315072657365744d696e7465725061757365724175746f49643a2060408201527f6d75737420686176652070617573657220726f6c6520746f2070617573650000606082015260800190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526019908201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604082015269726f206164647265737360b01b606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201526832b73a103a37b5b2b760b91b606082015260800190565b6020808252818101527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260600190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526029908201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960408201526839903737ba1037bbb760b91b606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201526e3732bc34b9ba32b73a103a37b5b2b760891b606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656040820152603960f91b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6020808252602c908201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60408201526b7574206f6620626f756e647360a01b606082015260800190565b60208082526030908201527f4552433732314275726e61626c653a2063616c6c6572206973206e6f74206f7760408201526f1b995c881b9bdc88185c1c1c9bdd995960821b606082015260800190565b602080825260409082018190527f4552433732315072657365744d696e7465725061757365724175746f49643a20908201527f6d75737420686176652070617573657220726f6c6520746f20756e7061757365606082015260800190565b6020808252602f908201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560408201526e103937b632b9903337b91039b2b63360891b606082015260800190565b6000821982111561258457612584612680565b500190565b60008261259857612598612696565b500490565b60008160001904831182151516156125b7576125b7612680565b500290565b6000828210156125ce576125ce612680565b500390565b60005b838110156125ee5781810151838201526020016125d6565b8381111561093f5750506000910152565b60008161260e5761260e612680565b506000190190565b60028104600182168061262a57607f821691505b6020821081141561264b57634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561266557612665612680565b5060010190565b60008261267b5761267b612696565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461074b57600080fdfea2646970667358221220060ab3a25853372e9e73cbe6825c5776670bf73e95f9f58e7e9c5d4ef5a9bbfe64736f6c63430008000033";

export class ERC721PresetMinterPauserAutoId__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name: string,
    symbol: string,
    baseTokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721PresetMinterPauserAutoId> {
    return super.deploy(
      name,
      symbol,
      baseTokenURI,
      overrides || {}
    ) as Promise<ERC721PresetMinterPauserAutoId>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    baseTokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      baseTokenURI,
      overrides || {}
    );
  }
  attach(address: string): ERC721PresetMinterPauserAutoId {
    return super.attach(address) as ERC721PresetMinterPauserAutoId;
  }
  connect(signer: Signer): ERC721PresetMinterPauserAutoId__factory {
    return super.connect(signer) as ERC721PresetMinterPauserAutoId__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721PresetMinterPauserAutoIdInterface {
    return new utils.Interface(_abi) as ERC721PresetMinterPauserAutoIdInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721PresetMinterPauserAutoId {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721PresetMinterPauserAutoId;
  }
}