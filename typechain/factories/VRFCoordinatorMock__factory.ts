/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import type { VRFCoordinatorMock, VRFCoordinatorMockInterface } from "../VRFCoordinatorMock"

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "linkAddress",
        type: "address",
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
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "seed",
        type: "uint256",
      },
    ],
    name: "RandomnessRequest",
    type: "event",
  },
  {
    inputs: [],
    name: "LINK",
    outputs: [
      {
        internalType: "contract LinkTokenInterface",
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
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "randomness",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "consumerContract",
        type: "address",
      },
    ],
    name: "callBackWithRandomness",
    outputs: [],
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
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onTokenTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105c43803806105c48339818101604052602081101561003357600080fd5b8101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610530806100946000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80631b6b6d2314610046578063a4c0ed3614610090578063cf55fe9714610175575b600080fd5b61004e6101cd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610173600480360360608110156100a657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156100ed57600080fd5b8201836020820111156100ff57600080fd5b8035906020019184600183028401116401000000008311171561012157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506101f2565b005b6101cb6004803603606081101561018b57600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610337565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f4d75737420757365204c494e4b20746f6b656e0000000000000000000000000081525060200191505060405180910390fd5b6000808280602001905160408110156102cc57600080fd5b8101908080519060200190929190805190602001909291905050509150915080828673ffffffffffffffffffffffffffffffffffffffff167f7a9a0a6960d95b32cded93c30e63e7c2eb9e877230813c172110ea54dc1c915c60405160405180910390a45050505050565b600060606394985ddd60e01b85856040516024018083815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506000620324b09050805a1015610439576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f6e6f7420656e6f7567682067617320666f7220636f6e73756d6572000000000081525060200191505060405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b602083106104865780518252602082019150602081019050602083039250610463565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146104e8576040519150601f19603f3d011682016040523d82523d6000602084013e6104ed565b606091505b505090505050505050505056fea2646970667358221220288226ae59703c3a1d8e00973f5d321d19e57f41c6f98c09d14422ef53bd795a64736f6c63430006060033"

type VRFCoordinatorMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: VRFCoordinatorMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class VRFCoordinatorMock__factory extends ContractFactory {
  constructor(...args: VRFCoordinatorMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
    this.contractName = "VRFCoordinatorMock"
  }

  deploy(
    linkAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VRFCoordinatorMock> {
    return super.deploy(linkAddress, overrides || {}) as Promise<VRFCoordinatorMock>
  }
  getDeployTransaction(
    linkAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(linkAddress, overrides || {})
  }
  attach(address: string): VRFCoordinatorMock {
    return super.attach(address) as VRFCoordinatorMock
  }
  connect(signer: Signer): VRFCoordinatorMock__factory {
    return super.connect(signer) as VRFCoordinatorMock__factory
  }
  static readonly contractName: "VRFCoordinatorMock"
  public readonly contractName: "VRFCoordinatorMock"
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): VRFCoordinatorMockInterface {
    return new utils.Interface(_abi) as VRFCoordinatorMockInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): VRFCoordinatorMock {
    return new Contract(address, _abi, signerOrProvider) as VRFCoordinatorMock
  }
}
