/**
 * This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { UseQueryOptions } from '@tanstack/react-query'

import {
  Addr,
  ArrayOfTupleOfAddrAndUint128,
  BondingStatusResponse,
  Config,
  InfoResponse,
  String,
  TotalPowerAtHeightResponse,
  VotingPowerAtHeightResponse,
} from '@dao-dao/types/contracts/NeutronVault'
import { getCosmWasmClientForChainId } from '@dao-dao/utils'

import { NeutronVaultQueryClient } from '../../../contracts/NeutronVault'
import { contractQueries } from '../contract'

export const neutronVaultQueryKeys = {
  contract: [
    {
      contract: 'neutronVault',
    },
  ] as const,
  address: (chainId: string, contractAddress: string) =>
    [
      {
        ...neutronVaultQueryKeys.contract[0],
        chainId,
        address: contractAddress,
      },
    ] as const,
  config: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...neutronVaultQueryKeys.address(chainId, contractAddress)[0],
        method: 'config',
        args,
      },
    ] as const,
  votingPowerAtHeight: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...neutronVaultQueryKeys.address(chainId, contractAddress)[0],
        method: 'voting_power_at_height',
        args,
      },
    ] as const,
  totalPowerAtHeight: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...neutronVaultQueryKeys.address(chainId, contractAddress)[0],
        method: 'total_power_at_height',
        args,
      },
    ] as const,
  bondingStatus: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...neutronVaultQueryKeys.address(chainId, contractAddress)[0],
        method: 'bonding_status',
        args,
      },
    ] as const,
  dao: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...neutronVaultQueryKeys.address(chainId, contractAddress)[0],
        method: 'dao',
        args,
      },
    ] as const,
  name: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...neutronVaultQueryKeys.address(chainId, contractAddress)[0],
        method: 'name',
        args,
      },
    ] as const,
  description: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...neutronVaultQueryKeys.address(chainId, contractAddress)[0],
        method: 'description',
        args,
      },
    ] as const,
  listBonders: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...neutronVaultQueryKeys.address(chainId, contractAddress)[0],
        method: 'list_bonders',
        args,
      },
    ] as const,
  info: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...neutronVaultQueryKeys.address(chainId, contractAddress)[0],
        method: 'info',
        args,
      },
    ] as const,
}
export const neutronVaultQueries = {
  config: <TData = Config>({
    chainId,
    contractAddress,
    options,
  }: NeutronVaultConfigQuery<TData>): UseQueryOptions<
    Config,
    Error,
    TData
  > => ({
    queryKey: neutronVaultQueryKeys.config(chainId, contractAddress),
    queryFn: async () => {
      return new NeutronVaultQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).config()
    },
    ...options,
  }),
  votingPowerAtHeight: <TData = VotingPowerAtHeightResponse>({
    chainId,
    contractAddress,
    args,
    options,
  }: NeutronVaultVotingPowerAtHeightQuery<TData>): UseQueryOptions<
    VotingPowerAtHeightResponse,
    Error,
    TData
  > => ({
    queryKey: neutronVaultQueryKeys.votingPowerAtHeight(
      chainId,
      contractAddress,
      args
    ),
    queryFn: async () => {
      return new NeutronVaultQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).votingPowerAtHeight({
        address: args.address,
        height: args.height,
      })
    },
    ...options,
  }),
  totalPowerAtHeight: <TData = TotalPowerAtHeightResponse>({
    chainId,
    contractAddress,
    args,
    options,
  }: NeutronVaultTotalPowerAtHeightQuery<TData>): UseQueryOptions<
    TotalPowerAtHeightResponse,
    Error,
    TData
  > => ({
    queryKey: neutronVaultQueryKeys.totalPowerAtHeight(
      chainId,
      contractAddress,
      args
    ),
    queryFn: async () => {
      return new NeutronVaultQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).totalPowerAtHeight({
        height: args.height,
      })
    },
    ...options,
  }),
  bondingStatus: <TData = BondingStatusResponse>({
    chainId,
    contractAddress,
    args,
    options,
  }: NeutronVaultBondingStatusQuery<TData>): UseQueryOptions<
    BondingStatusResponse,
    Error,
    TData
  > => ({
    queryKey: neutronVaultQueryKeys.bondingStatus(
      chainId,
      contractAddress,
      args
    ),
    queryFn: async () => {
      return new NeutronVaultQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).bondingStatus({
        address: args.address,
        height: args.height,
      })
    },
    ...options,
  }),
  dao: <TData = Addr>({
    chainId,
    contractAddress,
    options,
  }: NeutronVaultDaoQuery<TData>): UseQueryOptions<Addr, Error, TData> => ({
    queryKey: neutronVaultQueryKeys.dao(chainId, contractAddress),
    queryFn: async () => {
      return new NeutronVaultQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).dao()
    },
    ...options,
  }),
  name: <TData = String>({
    chainId,
    contractAddress,
    options,
  }: NeutronVaultNameQuery<TData>): UseQueryOptions<String, Error, TData> => ({
    queryKey: neutronVaultQueryKeys.name(chainId, contractAddress),
    queryFn: async () => {
      return new NeutronVaultQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).name()
    },
    ...options,
  }),
  description: <TData = String>({
    chainId,
    contractAddress,
    options,
  }: NeutronVaultDescriptionQuery<TData>): UseQueryOptions<
    String,
    Error,
    TData
  > => ({
    queryKey: neutronVaultQueryKeys.description(chainId, contractAddress),
    queryFn: async () => {
      return new NeutronVaultQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).description()
    },
    ...options,
  }),
  listBonders: <TData = ArrayOfTupleOfAddrAndUint128>({
    chainId,
    contractAddress,
    args,
    options,
  }: NeutronVaultListBondersQuery<TData>): UseQueryOptions<
    ArrayOfTupleOfAddrAndUint128,
    Error,
    TData
  > => ({
    queryKey: neutronVaultQueryKeys.listBonders(chainId, contractAddress, args),
    queryFn: async () => {
      return new NeutronVaultQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).listBonders({
        limit: args.limit,
        startAfter: args.startAfter,
      })
    },
    ...options,
  }),
  info: contractQueries.info,
}
export interface NeutronVaultReactQuery<TResponse, TData = TResponse> {
  chainId: string
  contractAddress: string
  options?: Omit<
    UseQueryOptions<TResponse, Error, TData>,
    'queryKey' | 'queryFn' | 'initialData'
  > & {
    initialData?: undefined
  }
}
export interface NeutronVaultInfoQuery<TData>
  extends NeutronVaultReactQuery<InfoResponse, TData> {}
export interface NeutronVaultListBondersQuery<TData>
  extends NeutronVaultReactQuery<ArrayOfTupleOfAddrAndUint128, TData> {
  args: {
    limit?: number
    startAfter?: string
  }
}
export interface NeutronVaultDescriptionQuery<TData>
  extends NeutronVaultReactQuery<String, TData> {}
export interface NeutronVaultNameQuery<TData>
  extends NeutronVaultReactQuery<String, TData> {}
export interface NeutronVaultDaoQuery<TData>
  extends NeutronVaultReactQuery<Addr, TData> {}
export interface NeutronVaultBondingStatusQuery<TData>
  extends NeutronVaultReactQuery<BondingStatusResponse, TData> {
  args: {
    address: string
    height?: number
  }
}
export interface NeutronVaultTotalPowerAtHeightQuery<TData>
  extends NeutronVaultReactQuery<TotalPowerAtHeightResponse, TData> {
  args: {
    height?: number
  }
}
export interface NeutronVaultVotingPowerAtHeightQuery<TData>
  extends NeutronVaultReactQuery<VotingPowerAtHeightResponse, TData> {
  args: {
    address: string
    height?: number
  }
}
export interface NeutronVaultConfigQuery<TData>
  extends NeutronVaultReactQuery<Config, TData> {}
