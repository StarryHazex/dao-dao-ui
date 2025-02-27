/**
 * This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { QueryClient, UseQueryOptions } from '@tanstack/react-query'

import {
  Addr,
  HooksResponse,
  InfoResponse,
  ListVotersResponse,
  OwnershipForString,
  RegisteredNftResponse,
  TotalPowerAtHeightResponse,
  VotingPowerAtHeightResponse,
} from '@dao-dao/types/contracts/DaoVotingSgCommunityNft'
import { getCosmWasmClientForChainId } from '@dao-dao/utils'

import { DaoVotingSgCommunityNftQueryClient } from '../../../contracts/DaoVotingSgCommunityNft'
import { contractQueries } from '../contract'
import { indexerQueries } from '../indexer'

export const daoVotingSgCommunityNftQueryKeys = {
  contract: [
    {
      contract: 'daoVotingSgCommunityNft',
    },
  ] as const,
  address: (chainId: string, contractAddress: string) =>
    [
      {
        ...daoVotingSgCommunityNftQueryKeys.contract[0],
        chainId,
        address: contractAddress,
      },
    ] as const,
  nftContract: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...daoVotingSgCommunityNftQueryKeys.address(
          chainId,
          contractAddress
        )[0],
        method: 'nft_contract',
        args,
      },
    ] as const,
  hooks: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...daoVotingSgCommunityNftQueryKeys.address(
          chainId,
          contractAddress
        )[0],
        method: 'hooks',
        args,
      },
    ] as const,
  registeredNft: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...daoVotingSgCommunityNftQueryKeys.address(
          chainId,
          contractAddress
        )[0],
        method: 'registered_nft',
        args,
      },
    ] as const,
  listVoters: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...daoVotingSgCommunityNftQueryKeys.address(
          chainId,
          contractAddress
        )[0],
        method: 'list_voters',
        args,
      },
    ] as const,
  ownership: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...daoVotingSgCommunityNftQueryKeys.address(
          chainId,
          contractAddress
        )[0],
        method: 'ownership',
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
        ...daoVotingSgCommunityNftQueryKeys.address(
          chainId,
          contractAddress
        )[0],
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
        ...daoVotingSgCommunityNftQueryKeys.address(
          chainId,
          contractAddress
        )[0],
        method: 'total_power_at_height',
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
        ...daoVotingSgCommunityNftQueryKeys.address(
          chainId,
          contractAddress
        )[0],
        method: 'dao',
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
        ...daoVotingSgCommunityNftQueryKeys.address(
          chainId,
          contractAddress
        )[0],
        method: 'info',
        args,
      },
    ] as const,
}
export const daoVotingSgCommunityNftQueries = {
  nftContract: <TData = Addr>(
    queryClient: QueryClient,
    {
      chainId,
      contractAddress,
      options,
    }: DaoVotingSgCommunityNftNftContractQuery<TData>
  ): UseQueryOptions<Addr, Error, TData> => ({
    queryKey: daoVotingSgCommunityNftQueryKeys.nftContract(
      chainId,
      contractAddress
    ),
    queryFn: async () => {
      try {
        // Attempt to fetch data from the indexer.
        return await queryClient.fetchQuery(
          indexerQueries.queryContract(queryClient, {
            chainId,
            contractAddress,
            formula: 'daoVotingSgCommunityNft/nftContract',
          })
        )
      } catch (error) {
        console.error(error)
      }

      // If indexer query fails, fallback to contract query.
      return new DaoVotingSgCommunityNftQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).nftContract()
    },
    ...options,
  }),
  hooks: <TData = HooksResponse>({
    chainId,
    contractAddress,
    options,
  }: DaoVotingSgCommunityNftHooksQuery<TData>): UseQueryOptions<
    HooksResponse,
    Error,
    TData
  > => ({
    queryKey: daoVotingSgCommunityNftQueryKeys.hooks(chainId, contractAddress),
    queryFn: async () => {
      return new DaoVotingSgCommunityNftQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).hooks()
    },
    ...options,
  }),
  registeredNft: <TData = RegisteredNftResponse>(
    queryClient: QueryClient,
    {
      chainId,
      contractAddress,
      args,
      options,
    }: DaoVotingSgCommunityNftRegisteredNftQuery<TData>
  ): UseQueryOptions<RegisteredNftResponse, Error, TData> => ({
    queryKey: daoVotingSgCommunityNftQueryKeys.registeredNft(
      chainId,
      contractAddress,
      args
    ),
    queryFn: async () => {
      try {
        // Attempt to fetch data from the indexer.
        return await queryClient.fetchQuery(
          indexerQueries.queryContract(queryClient, {
            chainId,
            contractAddress,
            formula: 'daoVotingSgCommunityNft/registeredNft',
            args,
          })
        )
      } catch (error) {
        console.error(error)
      }

      // If indexer query fails, fallback to contract query.
      return new DaoVotingSgCommunityNftQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).registeredNft({
        address: args.address,
      })
    },
    ...options,
  }),
  listVoters: <TData = ListVotersResponse>(
    queryClient: QueryClient,
    {
      chainId,
      contractAddress,
      args,
      options,
    }: DaoVotingSgCommunityNftListVotersQuery<TData>
  ): UseQueryOptions<ListVotersResponse, Error, TData> => ({
    queryKey: daoVotingSgCommunityNftQueryKeys.listVoters(
      chainId,
      contractAddress,
      args
    ),
    queryFn: async () => {
      try {
        // Attempt to fetch data from the indexer.
        return await queryClient.fetchQuery(
          indexerQueries.queryContract(queryClient, {
            chainId,
            contractAddress,
            formula: 'daoVotingSgCommunityNft/listVoters',
            args,
          })
        )
      } catch (error) {
        console.error(error)
      }

      // If indexer query fails, fallback to contract query.
      return new DaoVotingSgCommunityNftQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).listVoters({
        limit: args.limit,
        startAfter: args.startAfter,
      })
    },
    ...options,
  }),
  ownership: <TData = OwnershipForString>({
    chainId,
    contractAddress,
    options,
  }: DaoVotingSgCommunityNftOwnershipQuery<TData>): UseQueryOptions<
    OwnershipForString,
    Error,
    TData
  > => ({
    queryKey: daoVotingSgCommunityNftQueryKeys.ownership(
      chainId,
      contractAddress
    ),
    queryFn: async () => {
      return new DaoVotingSgCommunityNftQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).ownership()
    },
    ...options,
  }),
  votingPowerAtHeight: <TData = VotingPowerAtHeightResponse>(
    queryClient: QueryClient,
    {
      chainId,
      contractAddress,
      args,
      options,
    }: DaoVotingSgCommunityNftVotingPowerAtHeightQuery<TData>
  ): UseQueryOptions<VotingPowerAtHeightResponse, Error, TData> => ({
    queryKey: daoVotingSgCommunityNftQueryKeys.votingPowerAtHeight(
      chainId,
      contractAddress,
      args
    ),
    queryFn: async () => {
      try {
        // Attempt to fetch data from the indexer.
        return await queryClient.fetchQuery(
          indexerQueries.queryContract(queryClient, {
            chainId,
            contractAddress,
            formula: 'daoVotingSgCommunityNft/votingPowerAtHeight',
            args: {
              address: args.address,
            },
            ...(args.height && { block: { height: args.height } }),
          })
        )
      } catch (error) {
        console.error(error)
      }

      // If indexer query fails, fallback to contract query.
      return new DaoVotingSgCommunityNftQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).votingPowerAtHeight({
        address: args.address,
        height: args.height,
      })
    },
    ...options,
  }),
  totalPowerAtHeight: <TData = TotalPowerAtHeightResponse>(
    queryClient: QueryClient,
    {
      chainId,
      contractAddress,
      args,
      options,
    }: DaoVotingSgCommunityNftTotalPowerAtHeightQuery<TData>
  ): UseQueryOptions<TotalPowerAtHeightResponse, Error, TData> => ({
    queryKey: daoVotingSgCommunityNftQueryKeys.totalPowerAtHeight(
      chainId,
      contractAddress,
      args
    ),
    queryFn: async () => {
      try {
        // Attempt to fetch data from the indexer.
        return await queryClient.fetchQuery(
          indexerQueries.queryContract(queryClient, {
            chainId,
            contractAddress,
            formula: 'daoVotingSgCommunityNft/totalPowerAtHeight',
            ...(args.height && { block: { height: args.height } }),
          })
        )
      } catch (error) {
        console.error(error)
      }

      // If indexer query fails, fallback to contract query.
      return new DaoVotingSgCommunityNftQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).totalPowerAtHeight({
        height: args.height,
      })
    },
    ...options,
  }),
  dao: <TData = Addr>(
    queryClient: QueryClient,
    {
      chainId,
      contractAddress,
      options,
    }: DaoVotingSgCommunityNftDaoQuery<TData>
  ): UseQueryOptions<Addr, Error, TData> => ({
    queryKey: daoVotingSgCommunityNftQueryKeys.dao(chainId, contractAddress),
    queryFn: async () => {
      try {
        // Attempt to fetch data from the indexer.
        return await queryClient.fetchQuery(
          indexerQueries.queryContract(queryClient, {
            chainId,
            contractAddress,
            formula: 'daoVotingSgCommunityNft/dao',
          })
        )
      } catch (error) {
        console.error(error)
      }

      // If indexer query fails, fallback to contract query.
      return new DaoVotingSgCommunityNftQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).dao()
    },
    ...options,
  }),
  info: contractQueries.info,
}
export interface DaoVotingSgCommunityNftReactQuery<
  TResponse,
  TData = TResponse
> {
  chainId: string
  contractAddress: string
  options?: Omit<
    UseQueryOptions<TResponse, Error, TData>,
    'queryKey' | 'queryFn' | 'initialData'
  > & {
    initialData?: undefined
  }
}
export interface DaoVotingSgCommunityNftInfoQuery<TData>
  extends DaoVotingSgCommunityNftReactQuery<InfoResponse, TData> {}
export interface DaoVotingSgCommunityNftDaoQuery<TData>
  extends DaoVotingSgCommunityNftReactQuery<Addr, TData> {}
export interface DaoVotingSgCommunityNftTotalPowerAtHeightQuery<TData>
  extends DaoVotingSgCommunityNftReactQuery<TotalPowerAtHeightResponse, TData> {
  args: {
    height?: number
  }
}
export interface DaoVotingSgCommunityNftVotingPowerAtHeightQuery<TData>
  extends DaoVotingSgCommunityNftReactQuery<
    VotingPowerAtHeightResponse,
    TData
  > {
  args: {
    address: string
    height?: number
  }
}
export interface DaoVotingSgCommunityNftOwnershipQuery<TData>
  extends DaoVotingSgCommunityNftReactQuery<OwnershipForString, TData> {}
export interface DaoVotingSgCommunityNftListVotersQuery<TData>
  extends DaoVotingSgCommunityNftReactQuery<ListVotersResponse, TData> {
  args: {
    limit?: number
    startAfter?: string
  }
}
export interface DaoVotingSgCommunityNftRegisteredNftQuery<TData>
  extends DaoVotingSgCommunityNftReactQuery<RegisteredNftResponse, TData> {
  args: {
    address: string
  }
}
export interface DaoVotingSgCommunityNftHooksQuery<TData>
  extends DaoVotingSgCommunityNftReactQuery<HooksResponse, TData> {}
export interface DaoVotingSgCommunityNftNftContractQuery<TData>
  extends DaoVotingSgCommunityNftReactQuery<Addr, TData> {}
