/**
 * This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { StdFee } from '@cosmjs/amino'
import {
  CosmWasmClient,
  ExecuteResult,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate'

import {
  Addr,
  Boolean,
  Coin,
  Config,
  DepositInfoResponse,
  Empty,
  HooksResponse,
  PreProposeSubmissionPolicy,
  ProposeMessage,
  Status,
  UncheckedDenom,
  UncheckedDepositInfo,
} from '@dao-dao/types/contracts/DaoPreProposeSingle'
import { CHAIN_GAS_MULTIPLIER } from '@dao-dao/utils'

export interface DaoPreProposeSingleReadOnlyInterface {
  contractAddress: string
  proposalModule: () => Promise<Addr>
  dao: () => Promise<Addr>
  config: () => Promise<Config>
  depositInfo: ({
    proposalId,
  }: {
    proposalId: number
  }) => Promise<DepositInfoResponse>
  canPropose: ({ address }: { address: string }) => Promise<Boolean>
  proposalSubmittedHooks: () => Promise<HooksResponse>
  queryExtension: ({ msg }: { msg: Empty }) => Promise<any>
}
export class DaoPreProposeSingleQueryClient
  implements DaoPreProposeSingleReadOnlyInterface
{
  client: CosmWasmClient
  contractAddress: string
  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client
    this.contractAddress = contractAddress
    this.proposalModule = this.proposalModule.bind(this)
    this.dao = this.dao.bind(this)
    this.config = this.config.bind(this)
    this.depositInfo = this.depositInfo.bind(this)
    this.canPropose = this.canPropose.bind(this)
    this.proposalSubmittedHooks = this.proposalSubmittedHooks.bind(this)
    this.queryExtension = this.queryExtension.bind(this)
  }
  proposalModule = async (): Promise<Addr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal_module: {},
    })
  }
  dao = async (): Promise<Addr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      dao: {},
    })
  }
  config = async (): Promise<Config> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {},
    })
  }
  depositInfo = async ({
    proposalId,
  }: {
    proposalId: number
  }): Promise<DepositInfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      deposit_info: {
        proposal_id: proposalId,
      },
    })
  }
  canPropose = async ({ address }: { address: string }): Promise<Boolean> => {
    return this.client.queryContractSmart(this.contractAddress, {
      can_propose: {
        address,
      },
    })
  }
  proposalSubmittedHooks = async (): Promise<HooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal_submitted_hooks: {},
    })
  }
  queryExtension = async ({ msg }: { msg: Empty }): Promise<any> => {
    return this.client.queryContractSmart(this.contractAddress, {
      query_extension: {
        msg,
      },
    })
  }
}
export interface DaoPreProposeSingleInterface
  extends DaoPreProposeSingleReadOnlyInterface {
  contractAddress: string
  sender: string
  propose: (
    {
      msg,
    }: {
      msg: ProposeMessage
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  updateConfig: (
    {
      depositInfo,
      submissionPolicy,
    }: {
      depositInfo?: UncheckedDepositInfo
      submissionPolicy?: PreProposeSubmissionPolicy
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  updateSubmissionPolicy: (
    {
      allowlistAdd,
      allowlistRemove,
      denylistAdd,
      denylistRemove,
      setDaoMembers,
    }: {
      allowlistAdd?: string[]
      allowlistRemove?: string[]
      denylistAdd?: string[]
      denylistRemove?: string[]
      setDaoMembers?: boolean
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  withdraw: (
    {
      denom,
    }: {
      denom?: UncheckedDenom
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  extension: (
    {
      msg,
    }: {
      msg: Empty
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  addProposalSubmittedHook: (
    {
      address,
    }: {
      address: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  removeProposalSubmittedHook: (
    {
      address,
    }: {
      address: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
  proposalCompletedHook: (
    {
      newStatus,
      proposalId,
    }: {
      newStatus: Status
      proposalId: number
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>
}
export class DaoPreProposeSingleClient
  extends DaoPreProposeSingleQueryClient
  implements DaoPreProposeSingleInterface
{
  client: SigningCosmWasmClient
  sender: string
  contractAddress: string
  constructor(
    client: SigningCosmWasmClient,
    sender: string,
    contractAddress: string
  ) {
    super(client, contractAddress)
    this.client = client
    this.sender = sender
    this.contractAddress = contractAddress
    this.propose = this.propose.bind(this)
    this.updateConfig = this.updateConfig.bind(this)
    this.updateSubmissionPolicy = this.updateSubmissionPolicy.bind(this)
    this.withdraw = this.withdraw.bind(this)
    this.extension = this.extension.bind(this)
    this.addProposalSubmittedHook = this.addProposalSubmittedHook.bind(this)
    this.removeProposalSubmittedHook =
      this.removeProposalSubmittedHook.bind(this)
    this.proposalCompletedHook = this.proposalCompletedHook.bind(this)
  }
  propose = async (
    {
      msg,
    }: {
      msg: ProposeMessage
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        propose: {
          msg,
        },
      },
      fee,
      memo,
      _funds
    )
  }
  updateConfig = async (
    {
      depositInfo,
      submissionPolicy,
    }: {
      depositInfo?: UncheckedDepositInfo
      submissionPolicy?: PreProposeSubmissionPolicy
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_config: {
          deposit_info: depositInfo,
          submission_policy: submissionPolicy,
        },
      },
      fee,
      memo,
      _funds
    )
  }
  updateSubmissionPolicy = async (
    {
      allowlistAdd,
      allowlistRemove,
      denylistAdd,
      denylistRemove,
      setDaoMembers,
    }: {
      allowlistAdd?: string[]
      allowlistRemove?: string[]
      denylistAdd?: string[]
      denylistRemove?: string[]
      setDaoMembers?: boolean
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_submission_policy: {
          allowlist_add: allowlistAdd,
          allowlist_remove: allowlistRemove,
          denylist_add: denylistAdd,
          denylist_remove: denylistRemove,
          set_dao_members: setDaoMembers,
        },
      },
      fee,
      memo,
      _funds
    )
  }
  withdraw = async (
    {
      denom,
    }: {
      denom?: UncheckedDenom
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        withdraw: {
          denom,
        },
      },
      fee,
      memo,
      _funds
    )
  }
  extension = async (
    {
      msg,
    }: {
      msg: Empty
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        extension: {
          msg,
        },
      },
      fee,
      memo,
      _funds
    )
  }
  addProposalSubmittedHook = async (
    {
      address,
    }: {
      address: string
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        add_proposal_submitted_hook: {
          address,
        },
      },
      fee,
      memo,
      _funds
    )
  }
  removeProposalSubmittedHook = async (
    {
      address,
    }: {
      address: string
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        remove_proposal_submitted_hook: {
          address,
        },
      },
      fee,
      memo,
      _funds
    )
  }
  proposalCompletedHook = async (
    {
      newStatus,
      proposalId,
    }: {
      newStatus: Status
      proposalId: number
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        proposal_completed_hook: {
          new_status: newStatus,
          proposal_id: proposalId,
        },
      },
      fee,
      memo,
      _funds
    )
  }
}
