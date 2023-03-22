import { useWallet } from '@noahsaso/cosmodal'

import {
  TreasuryAndNftsTab as StatelessTreasuryAndNftsTab,
  useCachedLoading,
  useDaoInfoContext,
  useNavHelpers,
} from '@dao-dao/stateless'
import { CoreActionKey } from '@dao-dao/types'

import { useActionForKey } from '../../../actions'
import { useDaoProposalSinglePrefill, useMembership } from '../../../hooks'
import {
  nftCardInfosForDaoSelector,
  treasuryTokenCardInfosSelector,
} from '../../../recoil'
import {
  useCw20CommonGovernanceTokenInfoIfExists,
  useCw721CommonGovernanceTokenInfoIfExists,
  useNativeCommonGovernanceTokenInfoIfExists,
} from '../../../voting-module-adapter'
import { NftCard } from '../../NftCard'
import { StargazeNftImportModal } from '../../StargazeNftImportModal'
import { DaoFiatDepositModal } from '../DaoFiatDepositModal'
import { DaoTokenCard } from '../DaoTokenCard'

export const TreasuryAndNftsTab = () => {
  const daoInfo = useDaoInfoContext()
  const { connected } = useWallet()
  const { getDaoProposalPath } = useNavHelpers()
  const { isMember = false } = useMembership(daoInfo)

  const { denomOrAddress: cw20GovernanceTokenAddress } =
    useCw20CommonGovernanceTokenInfoIfExists() ?? {}
  const { denomOrAddress: nativeGovernanceTokenDenom } =
    useNativeCommonGovernanceTokenInfoIfExists() ?? {}
  const { denomOrAddress: cw721GovernanceCollectionAddress } =
    useCw721CommonGovernanceTokenInfoIfExists() ?? {}

  const tokens = useCachedLoading(
    treasuryTokenCardInfosSelector({
      coreAddress: daoInfo.coreAddress,
      chainId: daoInfo.chainId,
      cw20GovernanceTokenAddress,
      nativeGovernanceTokenDenom,
    }),
    []
  )
  const nfts = useCachedLoading(
    nftCardInfosForDaoSelector({
      coreAddress: daoInfo.coreAddress,
      chainId: daoInfo.chainId,
      governanceCollectionAddress: cw721GovernanceCollectionAddress,
    }),
    []
  )

  // ManageCw721 action defaults to adding
  const addCw721Action = useActionForKey(CoreActionKey.ManageCw721)
  const proposalPrefill = useDaoProposalSinglePrefill({
    actions: addCw721Action
      ? [
          {
            action: addCw721Action,
            data: addCw721Action.useDefaults(),
          },
        ]
      : [],
  })

  return (
    <StatelessTreasuryAndNftsTab
      FiatDepositModal={connected ? DaoFiatDepositModal : undefined}
      NftCard={NftCard}
      StargazeNftImportModal={StargazeNftImportModal}
      TokenCard={DaoTokenCard}
      addCollectionHref={
        // Prefill URL only valid if action exists.
        !!addCw721Action && proposalPrefill
          ? getDaoProposalPath(daoInfo.coreAddress, 'create', {
              prefill: proposalPrefill,
            })
          : undefined
      }
      isMember={isMember}
      nfts={nfts}
      tokens={tokens}
    />
  )
}
