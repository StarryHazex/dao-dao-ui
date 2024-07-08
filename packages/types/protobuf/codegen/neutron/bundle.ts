import * as _162 from "./contractmanager/v1/failure";
import * as _163 from "./cron/genesis";
import * as _164 from "./cron/params";
import * as _165 from "./cron/query";
import * as _166 from "./cron/schedule";
import * as _167 from "./cron/tx";
import * as _168 from "./dex/deposit_record";
import * as _169 from "./dex/genesis";
import * as _170 from "./dex/limit_order_expiration";
import * as _171 from "./dex/limit_order_tranche_user";
import * as _172 from "./dex/limit_order_tranche";
import * as _173 from "./dex/pair_id";
import * as _174 from "./dex/params";
import * as _175 from "./dex/pool_metadata";
import * as _176 from "./dex/pool_reserves";
import * as _177 from "./dex/pool";
import * as _178 from "./dex/query";
import * as _179 from "./dex/tick_liquidity";
import * as _180 from "./dex/trade_pair_id";
import * as _181 from "./dex/tx";
import * as _182 from "./feeburner/genesis";
import * as _183 from "./feeburner/params";
import * as _184 from "./feeburner/query";
import * as _185 from "./feeburner/total_burned_neutrons_amount";
import * as _186 from "./feeburner/tx";
import * as _187 from "./feerefunder/fee";
import * as _188 from "./feerefunder/genesis";
import * as _189 from "./feerefunder/params";
import * as _190 from "./feerefunder/query";
import * as _191 from "./feerefunder/tx";
import * as _192 from "./interchainqueries/genesis";
import * as _193 from "./interchainqueries/params";
import * as _194 from "./interchainqueries/query";
import * as _195 from "./interchainqueries/tx";
import * as _196 from "./interchaintxs/v1/genesis";
import * as _197 from "./interchaintxs/v1/params";
import * as _198 from "./interchaintxs/v1/query";
import * as _199 from "./interchaintxs/v1/tx";
import * as _485 from "./cron/tx.amino";
import * as _486 from "./dex/tx.amino";
import * as _487 from "./feeburner/tx.amino";
import * as _488 from "./feerefunder/tx.amino";
import * as _489 from "./interchainqueries/tx.amino";
import * as _490 from "./interchaintxs/v1/tx.amino";
import * as _491 from "./cron/tx.registry";
import * as _492 from "./dex/tx.registry";
import * as _493 from "./feeburner/tx.registry";
import * as _494 from "./feerefunder/tx.registry";
import * as _495 from "./interchainqueries/tx.registry";
import * as _496 from "./interchaintxs/v1/tx.registry";
import * as _497 from "./cron/query.rpc.Query";
import * as _498 from "./dex/query.rpc.Query";
import * as _499 from "./feeburner/query.rpc.Query";
import * as _500 from "./feerefunder/query.rpc.Query";
import * as _501 from "./interchainqueries/query.rpc.Query";
import * as _502 from "./interchaintxs/v1/query.rpc.Query";
import * as _503 from "./cron/tx.rpc.msg";
import * as _504 from "./dex/tx.rpc.msg";
import * as _505 from "./feeburner/tx.rpc.msg";
import * as _506 from "./feerefunder/tx.rpc.msg";
import * as _507 from "./interchainqueries/tx.rpc.msg";
import * as _508 from "./interchaintxs/v1/tx.rpc.msg";
import * as _652 from "./rpc.query";
import * as _653 from "./rpc.tx";
export namespace neutron {
  export namespace contractmanager {
    export const v1 = {
      ..._162
    };
  }
  export const cron = {
    ..._163,
    ..._164,
    ..._165,
    ..._166,
    ..._167,
    ..._485,
    ..._491,
    ..._497,
    ..._503
  };
  export const dex = {
    ..._168,
    ..._169,
    ..._170,
    ..._171,
    ..._172,
    ..._173,
    ..._174,
    ..._175,
    ..._176,
    ..._177,
    ..._178,
    ..._179,
    ..._180,
    ..._181,
    ..._486,
    ..._492,
    ..._498,
    ..._504
  };
  export const feeburner = {
    ..._182,
    ..._183,
    ..._184,
    ..._185,
    ..._186,
    ..._487,
    ..._493,
    ..._499,
    ..._505
  };
  export const feerefunder = {
    ..._187,
    ..._188,
    ..._189,
    ..._190,
    ..._191,
    ..._488,
    ..._494,
    ..._500,
    ..._506
  };
  export const interchainqueries = {
    ..._192,
    ..._193,
    ..._194,
    ..._195,
    ..._489,
    ..._495,
    ..._501,
    ..._507
  };
  export namespace interchaintxs {
    export const v1 = {
      ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._490,
      ..._496,
      ..._502,
      ..._508
    };
  }
  export const ClientFactory = {
    ..._652,
    ..._653
  };
}