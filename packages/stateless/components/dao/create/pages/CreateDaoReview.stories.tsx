import { ComponentMeta, ComponentStory } from '@storybook/react'

import { TokenBasedCreator } from '@dao-dao/stateful/creators/TokenBased'
import { DaoProposalSingleAdapter } from '@dao-dao/stateful/proposal-module-adapter/adapters/DaoProposalSingle'
import { CHAIN_ID } from '@dao-dao/storybook'
import { WalletProviderDecorator } from '@dao-dao/storybook/decorators'
import { makeCreateDaoFormDecorator } from '@dao-dao/storybook/decorators/makeCreateDaoFormDecorator'
import { makeDappLayoutDecorator } from '@dao-dao/storybook/decorators/makeDappLayoutDecorator'
import {
  DaoProposalSingleAdapterId,
  TokenBasedCreatorId,
  getSupportedChainConfig,
} from '@dao-dao/utils'

import { CreateDaoReview } from './CreateDaoReview'

export default {
  title:
    'DAO DAO / packages / stateless / components / dao / create / pages / CreateDaoReview',
  component: CreateDaoReview,
  decorators: [
    // Direct ancestor of rendered story.
    makeCreateDaoFormDecorator(3, {
      name: 'Evil Cow DAO',
      description: "There are evil cows all over the place. Let's milk 'em!",
      imageUrl:
        'https://ipfs.stargaze.zone/ipfs/QmbGvE3wmxex8KiBbbvMjR8f9adR28s3XkiZSTuGmHoMHV/33.jpg',
      creator: {
        id: TokenBasedCreatorId,
        data: {
          ...TokenBasedCreator.makeDefaultConfig(
            getSupportedChainConfig(CHAIN_ID)!
          ),
          newInfo: {
            ...TokenBasedCreator.makeDefaultConfig(
              getSupportedChainConfig(CHAIN_ID)!
            ).newInfo,
            symbol: 'TST',
            name: 'Test Token',
          },
        },
      },
      proposalModuleAdapters: [
        {
          id: DaoProposalSingleAdapterId,
          data: {
            ...DaoProposalSingleAdapter.daoCreation.extraVotingConfig?.default,
            proposalDeposit: {
              amount: 5.2,
              refundFailed: false,
            },
          },
        },
      ],
    }),
    makeDappLayoutDecorator(),
    WalletProviderDecorator,
  ],
} as ComponentMeta<typeof CreateDaoReview>

// makeCreateDaoFormDecorator renders the page based on the initialIndex set to
// `3` in the decorators above.
const Template: ComponentStory<typeof CreateDaoReview> = (_args) => <></>

export const Default = Template.bind({})
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/ZnQ4SMv8UUgKDZsR5YjVGH/Dao-2.0?node-id=981%3A45165',
  },
}
