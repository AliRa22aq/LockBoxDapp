/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LockBoxTestTokens,
  LockBoxTestTokensInterface,
} from "../LockBoxTestTokens";

const _abi = [
  {
    inputs: [],
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
        name: "amount",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "amount",
        type: "uint256",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
  "0x60806040523480156200001157600080fd5b5060408051808201825260118152704c6f636b426f7854657374546f6b656e7360781b6020808301918252835180850190945260048452631310951560e21b908401528151919291839183916200006b9160059162000260565b5080516200008190600690602084019062000260565b50506007805460ff19169055506200009b600033620000fb565b620000c77f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000fb565b620000f37f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33620000fb565b505062000343565b6200010782826200010b565b5050565b6200012282826200014e60201b620009cc1760201c565b60008281526001602090815260409091206200014991839062000a50620001ee821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000107576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001aa3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600062000205836001600160a01b0384166200020e565b90505b92915050565b6000818152600183016020526040812054620002575750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000208565b50600062000208565b8280546200026e9062000306565b90600052602060002090601f016020900481019282620002925760008555620002dd565b82601f10620002ad57805160ff1916838001178555620002dd565b82800160010185558215620002dd579182015b82811115620002dd578251825591602001919060010190620002c0565b50620002eb929150620002ef565b5090565b5b80821115620002eb5760008155600101620002f0565b600181811c908216806200031b57607f821691505b602082108114156200033d57634e487b7160e01b600052602260045260246000fd5b50919050565b61192a80620003536000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d5391393146103af578063d547741f146103d6578063dd62ed3e146103e9578063e63ab1e91461042257600080fd5b8063a457c2d714610376578063a9059cbb14610389578063ca15c8731461039c57600080fd5b80639010d07c116100d35780639010d07c1461032857806391d148541461035357806395d89b4114610366578063a217fddf1461036e57600080fd5b806370a08231146102e457806379cc67901461030d5780638456cb591461032057600080fd5b8063313ce567116101665780633f4ba83a116101405780633f4ba83a146102ab57806340c10f19146102b357806342966c68146102c65780635c975abb146102d957600080fd5b8063313ce5671461027657806336568abe14610285578063395093511461029857600080fd5b806318160ddd116101a257806318160ddd1461021957806323b872dd1461022b578063248a9ca31461023e5780632f2ff15d1461026157600080fd5b806301ffc9a7146101c957806306fdde03146101f1578063095ea7b314610206575b600080fd5b6101dc6101d7366004611742565b610449565b60405190151581526020015b60405180910390f35b6101f9610474565b6040516101e891906117df565b6101dc6102143660046116be565b610506565b6004545b6040519081526020016101e8565b6101dc610239366004611683565b61051c565b61021d61024c3660046116e7565b60009081526020819052604090206001015490565b61027461026f3660046116ff565b6105cb565b005b604051601281526020016101e8565b6102746102933660046116ff565b6105f6565b6101dc6102a63660046116be565b610674565b6102746106b0565b6102746102c13660046116be565b610756565b6102746102d43660046116e7565b610760565b60075460ff166101dc565b61021d6102f2366004611637565b6001600160a01b031660009081526002602052604090205490565b61027461031b3660046116be565b61076d565b6102746107ee565b61033b610336366004611721565b610892565b6040516001600160a01b0390911681526020016101e8565b6101dc6103613660046116ff565b6108b1565b6101f96108da565b61021d600081565b6101dc6103843660046116be565b6108e9565b6101dc6103973660046116be565b610982565b61021d6103aa3660046116e7565b61098f565b61021d7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102746103e43660046116ff565b6109a6565b61021d6103f7366004611651565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b61021d7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60006001600160e01b03198216635a05180f60e01b148061046e575061046e82610a65565b92915050565b606060058054610483906118a3565b80601f01602080910402602001604051908101604052809291908181526020018280546104af906118a3565b80156104fc5780601f106104d1576101008083540402835291602001916104fc565b820191906000526020600020905b8154815290600101906020018083116104df57829003601f168201915b5050505050905090565b6000610513338484610a9a565b50600192915050565b6000610529848484610bbe565b6001600160a01b0384166000908152600360209081526040808320338452909152902054828110156105b35760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6105c08533858403610a9a565b506001949350505050565b6000828152602081905260409020600101546105e78133610d99565b6105f18383610dfd565b505050565b6001600160a01b03811633146106665760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016105aa565b6106708282610e1f565b5050565b3360008181526003602090815260408083206001600160a01b038716845290915281205490916105139185906106ab908690611812565b610a9a565b6106da7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336108b1565b61074c5760405162461bcd60e51b815260206004820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20756e70617573650000000000000060648201526084016105aa565b610754610e41565b565b6106708282610ed4565b61076a3382610fbf565b50565b600061077983336103f7565b9050818110156107d75760405162461bcd60e51b8152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f77604482015263616e636560e01b60648201526084016105aa565b6107e48333848403610a9a565b6105f18383610fbf565b6108187f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336108b1565b61088a5760405162461bcd60e51b815260206004820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20706175736500000000000000000060648201526084016105aa565b610754611119565b60008281526001602052604081206108aa9083611194565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b606060068054610483906118a3565b3360009081526003602090815260408083206001600160a01b03861684529091528120548281101561096b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016105aa565b6109783385858403610a9a565b5060019392505050565b6000610513338484610bbe565b600081815260016020526040812061046e906111a0565b6000828152602081905260409020600101546109c28133610d99565b6105f18383610e1f565b6109d682826108b1565b610670576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610a0c3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006108aa836001600160a01b0384166111aa565b60006001600160e01b03198216637965db0b60e01b148061046e57506301ffc9a760e01b6001600160e01b031983161461046e565b6001600160a01b038316610afc5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016105aa565b6001600160a01b038216610b5d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016105aa565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610c225760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016105aa565b6001600160a01b038216610c845760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016105aa565b610c8f8383836111f9565b6001600160a01b03831660009081526002602052604090205481811015610d075760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016105aa565b6001600160a01b03808516600090815260026020526040808220858503905591851681529081208054849290610d3e908490611812565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d8a91815260200190565b60405180910390a35b50505050565b610da382826108b1565b61067057610dbb816001600160a01b03166014611204565b610dc6836020611204565b604051602001610dd792919061176a565b60408051601f198184030181529082905262461bcd60e51b82526105aa916004016117df565b610e0782826109cc565b60008281526001602052604090206105f19082610a50565b610e2982826113e6565b60008281526001602052604090206105f1908261144b565b60075460ff16610e8a5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016105aa565b6007805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216610f2a5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016105aa565b610f36600083836111f9565b8060046000828254610f489190611812565b90915550506001600160a01b03821660009081526002602052604081208054839290610f75908490611812565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b03821661101f5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016105aa565b61102b826000836111f9565b6001600160a01b0382166000908152600260205260409020548181101561109f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016105aa565b6001600160a01b03831660009081526002602052604081208383039055600480548492906110ce908490611849565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60075460ff161561115f5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016105aa565b6007805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610eb73390565b60006108aa8383611460565b600061046e825490565b60008181526001830160205260408120546111f15750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561046e565b50600061046e565b6105f1838383611498565b6060600061121383600261182a565b61121e906002611812565b67ffffffffffffffff81111561124457634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561126e576020820181803683370190505b509050600360fc1b8160008151811061129757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106112d457634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060006112f884600261182a565b611303906001611812565b90505b6001811115611397576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061134557634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061136957634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c936113908161188c565b9050611306565b5083156108aa5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016105aa565b6113f082826108b1565b15610670576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006108aa836001600160a01b0384166114fe565b600082600001828154811061148557634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b60075460ff16156105f15760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b60648201526084016105aa565b60008181526001830160205260408120548015611611576000611522600183611849565b855490915060009061153690600190611849565b90508181146115b757600086600001828154811061156457634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508087600001848154811061159557634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b85548690806115d657634e487b7160e01b600052603160045260246000fd5b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061046e565b600091505061046e565b80356001600160a01b038116811461163257600080fd5b919050565b600060208284031215611648578081fd5b6108aa8261161b565b60008060408385031215611663578081fd5b61166c8361161b565b915061167a6020840161161b565b90509250929050565b600080600060608486031215611697578081fd5b6116a08461161b565b92506116ae6020850161161b565b9150604084013590509250925092565b600080604083850312156116d0578182fd5b6116d98361161b565b946020939093013593505050565b6000602082840312156116f8578081fd5b5035919050565b60008060408385031215611711578182fd5b8235915061167a6020840161161b565b60008060408385031215611733578182fd5b50508035926020909101359150565b600060208284031215611753578081fd5b81356001600160e01b0319811681146108aa578182fd5b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516117a2816017850160208801611860565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516117d3816028840160208801611860565b01602801949350505050565b60208152600082518060208401526117fe816040850160208701611860565b601f01601f19169190910160400192915050565b60008219821115611825576118256118de565b500190565b6000816000190483118215151615611844576118446118de565b500290565b60008282101561185b5761185b6118de565b500390565b60005b8381101561187b578181015183820152602001611863565b83811115610d935750506000910152565b60008161189b5761189b6118de565b506000190190565b600181811c908216806118b757607f821691505b602082108114156118d857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea264697066735822122008f532680f343f03bc0796c930aec822f743586edc82abf27ebb21307d0ead2864736f6c63430008040033";

export class LockBoxTestTokens__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LockBoxTestTokens> {
    return super.deploy(overrides || {}) as Promise<LockBoxTestTokens>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LockBoxTestTokens {
    return super.attach(address) as LockBoxTestTokens;
  }
  connect(signer: Signer): LockBoxTestTokens__factory {
    return super.connect(signer) as LockBoxTestTokens__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LockBoxTestTokensInterface {
    return new utils.Interface(_abi) as LockBoxTestTokensInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LockBoxTestTokens {
    return new Contract(address, _abi, signerOrProvider) as LockBoxTestTokens;
  }
}
