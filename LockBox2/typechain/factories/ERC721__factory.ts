/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721, ERC721Interface } from "../ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
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
    inputs: [],
    name: "NFTcounter",
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
    inputs: [],
    name: "mintNFT",
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
];

const _bytecode =
  "0x6080604052600080553480156200001557600080fd5b506040516200171a3803806200171a8339810160408190526200003891620001bd565b81516200004d9060019060208501906200006c565b508051620000639060029060208401906200006c565b50505062000277565b8280546200007a9062000224565b90600052602060002090601f0160209004810192826200009e5760008555620000e9565b82601f10620000b957805160ff1916838001178555620000e9565b82800160010185558215620000e9579182015b82811115620000e9578251825591602001919060010190620000cc565b50620000f7929150620000fb565b5090565b5b80821115620000f75760008155600101620000fc565b600082601f83011262000123578081fd5b81516001600160401b038082111562000140576200014062000261565b6040516020601f8401601f191682018101838111838210171562000168576200016862000261565b60405283825285840181018710156200017f578485fd5b8492505b83831015620001a2578583018101518284018201529182019162000183565b83831115620001b357848185840101525b5095945050505050565b60008060408385031215620001d0578182fd5b82516001600160401b0380821115620001e7578384fd5b620001f58683870162000112565b935060208501519150808211156200020b578283fd5b506200021a8582860162000112565b9150509250929050565b6002810460018216806200023957607f821691505b602082108114156200025b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61149380620002876000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80636352211e11610097578063a22cb46511610066578063a22cb465146101de578063b88d4fde146101f1578063c87b56dd14610204578063e985e9c514610217576100f5565b80636352211e1461019b57806370a08231146101ae5780637bb0cb0b146101ce57806395d89b41146101d6576100f5565b8063095ea7b3116100d3578063095ea7b31461015857806314f710fe1461016d57806323b872dd1461017557806342842e0e14610188576100f5565b806301ffc9a7146100fa57806306fdde0314610123578063081812fc14610138575b600080fd5b61010d610108366004610e1b565b61022a565b60405161011a9190610f17565b60405180910390f35b61012b610272565b60405161011a9190610f22565b61014b610146366004610e53565b610304565b60405161011a9190610ec6565b61016b610166366004610df2565b610350565b005b61016b6103e8565b61016b610183366004610cb1565b61040a565b61016b610196366004610cb1565b610442565b61014b6101a9366004610e53565b61045d565b6101c16101bc366004610c65565b610492565b60405161011a9190611320565b6101c16104d6565b61012b6104dc565b61016b6101ec366004610db8565b6104eb565b61016b6101ff366004610cec565b610501565b61012b610212366004610e53565b610540565b61010d610225366004610c7f565b6105c3565b60006001600160e01b031982166380ac58cd60e01b148061025b57506001600160e01b03198216635b5e139f60e01b145b8061026a575061026a826105f1565b90505b919050565b60606001805461028190611398565b80601f01602080910402602001604051908101604052809291908181526020018280546102ad90611398565b80156102fa5780601f106102cf576101008083540402835291602001916102fa565b820191906000526020600020905b8154815290600101906020018083116102dd57829003601f168201915b5050505050905090565b600061030f8261060a565b6103345760405162461bcd60e51b815260040161032b906111aa565b60405180910390fd5b506000908152600560205260409020546001600160a01b031690565b600061035b8261045d565b9050806001600160a01b0316836001600160a01b0316141561038f5760405162461bcd60e51b815260040161032b9061128e565b806001600160a01b03166103a1610627565b6001600160a01b031614806103bd57506103bd81610225610627565b6103d95760405162461bcd60e51b815260040161032b90611085565b6103e3838361062b565b505050565b6000805490806103f7836113d3565b919050555061040833600054610699565b565b61041b610415610627565b82610778565b6104375760405162461bcd60e51b815260040161032b906112cf565b6103e38383836107fd565b6103e383838360405180602001604052806000815250610501565b6000818152600360205260408120546001600160a01b03168061026a5760405162461bcd60e51b815260040161032b9061112c565b60006001600160a01b0382166104ba5760405162461bcd60e51b815260040161032b906110e2565b506001600160a01b031660009081526004602052604090205490565b60005481565b60606002805461028190611398565b6104fd6104f6610627565b838361092a565b5050565b61051261050c610627565b83610778565b61052e5760405162461bcd60e51b815260040161032b906112cf565b61053a848484846109cd565b50505050565b606061054b8261060a565b6105675760405162461bcd60e51b815260040161032b9061123f565b6000610571610a00565b9050600081511161059157604051806020016040528060008152506105bc565b8061059b84610a12565b6040516020016105ac929190610e97565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6001600160e01b031981166301ffc9a760e01b14919050565b6000908152600360205260409020546001600160a01b0316151590565b3390565b600081815260056020526040902080546001600160a01b0319166001600160a01b03841690811790915581906106608261045d565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6001600160a01b0382166106bf5760405162461bcd60e51b815260040161032b90611175565b6106c88161060a565b156106e55760405162461bcd60e51b815260040161032b90610f87565b6106f1600083836103e3565b6001600160a01b038216600090815260046020526040812080546001929061071a908490611329565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006107838261060a565b61079f5760405162461bcd60e51b815260040161032b90611039565b60006107aa8361045d565b9050806001600160a01b0316846001600160a01b031614806107e55750836001600160a01b03166107da84610304565b6001600160a01b0316145b806107f557506107f581856105c3565b949350505050565b826001600160a01b03166108108261045d565b6001600160a01b0316146108365760405162461bcd60e51b815260040161032b906111f6565b6001600160a01b03821661085c5760405162461bcd60e51b815260040161032b90610fbe565b6108678383836103e3565b61087260008261062b565b6001600160a01b038316600090815260046020526040812080546001929061089b908490611355565b90915550506001600160a01b03821660009081526004602052604081208054600192906108c9908490611329565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b0316141561095c5760405162461bcd60e51b815260040161032b90611002565b6001600160a01b0383811660008181526006602090815260408083209487168084529490915290819020805460ff1916851515179055517f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31906109c0908590610f17565b60405180910390a3505050565b6109d88484846107fd565b6109e484848484610b2d565b61053a5760405162461bcd60e51b815260040161032b90610f35565b60408051602081019091526000815290565b606081610a3757506040805180820190915260018152600360fc1b602082015261026d565b8160005b8115610a615780610a4b816113d3565b9150610a5a9050600a83611341565b9150610a3b565b60008167ffffffffffffffff811115610a8a57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610ab4576020820181803683370190505b5090505b84156107f557610ac9600183611355565b9150610ad6600a866113ee565b610ae1906030611329565b60f81b818381518110610b0457634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610b26600a86611341565b9450610ab8565b6000610b41846001600160a01b0316610c48565b15610c3d57836001600160a01b031663150b7a02610b5d610627565b8786866040518563ffffffff1660e01b8152600401610b7f9493929190610eda565b602060405180830381600087803b158015610b9957600080fd5b505af1925050508015610bc9575060408051601f3d908101601f19168201909252610bc691810190610e37565b60015b610c23573d808015610bf7576040519150601f19603f3d011682016040523d82523d6000602084013e610bfc565b606091505b508051610c1b5760405162461bcd60e51b815260040161032b90610f35565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506107f5565b506001949350505050565b3b151590565b80356001600160a01b038116811461026d57600080fd5b600060208284031215610c76578081fd5b6105bc82610c4e565b60008060408385031215610c91578081fd5b610c9a83610c4e565b9150610ca860208401610c4e565b90509250929050565b600080600060608486031215610cc5578081fd5b610cce84610c4e565b9250610cdc60208501610c4e565b9150604084013590509250925092565b60008060008060808587031215610d01578081fd5b610d0a85610c4e565b93506020610d19818701610c4e565b935060408601359250606086013567ffffffffffffffff80821115610d3c578384fd5b818801915088601f830112610d4f578384fd5b813581811115610d6157610d6161142e565b604051601f8201601f1916810185018381118282101715610d8457610d8461142e565b60405281815283820185018b1015610d9a578586fd5b81858501868301379081019093019390935250939692955090935050565b60008060408385031215610dca578182fd5b610dd383610c4e565b915060208301358015158114610de7578182fd5b809150509250929050565b60008060408385031215610e04578182fd5b610e0d83610c4e565b946020939093013593505050565b600060208284031215610e2c578081fd5b81356105bc81611444565b600060208284031215610e48578081fd5b81516105bc81611444565b600060208284031215610e64578081fd5b5035919050565b60008151808452610e8381602086016020860161136c565b601f01601f19169290920160200192915050565b60008351610ea981846020880161136c565b835190830190610ebd81836020880161136c565b01949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090610f0d90830184610e6b565b9695505050505050565b901515815260200190565b6000602082526105bc6020830184610e6b565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252601c908201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604082015260600190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526019908201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604082015269726f206164647265737360b01b606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201526832b73a103a37b5b2b760b91b606082015260800190565b6020808252818101527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260600190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526029908201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960408201526839903737ba1037bbb760b91b606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201526e3732bc34b9ba32b73a103a37b5b2b760891b606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656040820152603960f91b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b90815260200190565b6000821982111561133c5761133c611402565b500190565b60008261135057611350611418565b500490565b60008282101561136757611367611402565b500390565b60005b8381101561138757818101518382015260200161136f565b8381111561053a5750506000910152565b6002810460018216806113ac57607f821691505b602082108114156113cd57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156113e7576113e7611402565b5060010190565b6000826113fd576113fd611418565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461145a57600080fd5b5056fea2646970667358221220fd0b1abc67842bdd26e0d8f25ca6bda89e361929c780eafacd75f8b7deb82beb64736f6c63430008000033";

export class ERC721__factory extends ContractFactory {
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
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
