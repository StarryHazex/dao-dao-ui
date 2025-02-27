import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { toTimestamp, fromTimestamp } from "../../../helpers";
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecord {
  /** incentive_id is the id uniquely identifying this incentive record. */
  incentiveId: bigint;
  poolId: bigint;
  /** incentive record body holds necessary */
  incentiveRecordBody: IncentiveRecordBody | undefined;
  /**
   * min_uptime is the minimum uptime required for liquidity to qualify for this
   * incentive. It should be always be one of the supported uptimes in
   * types.SupportedUptimes
   */
  minUptime: Duration | undefined;
}
export interface IncentiveRecordProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecord";
  value: Uint8Array;
}
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecordAmino {
  /** incentive_id is the id uniquely identifying this incentive record. */
  incentive_id?: string;
  pool_id?: string;
  /** incentive record body holds necessary */
  incentive_record_body?: IncentiveRecordBodyAmino | undefined;
  /**
   * min_uptime is the minimum uptime required for liquidity to qualify for this
   * incentive. It should be always be one of the supported uptimes in
   * types.SupportedUptimes
   */
  min_uptime?: DurationAmino | undefined;
}
export interface IncentiveRecordAminoMsg {
  type: "osmosis/concentratedliquidity/incentive-record";
  value: IncentiveRecordAmino;
}
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecordSDKType {
  incentive_id: bigint;
  pool_id: bigint;
  incentive_record_body: IncentiveRecordBodySDKType | undefined;
  min_uptime: DurationSDKType | undefined;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBody {
  /** remaining_coin is the total amount of incentives to be distributed */
  remainingCoin: DecCoin | undefined;
  /** emission_rate is the incentive emission rate per second */
  emissionRate: string;
  /** start_time is the time when the incentive starts distributing */
  startTime: Date | undefined;
}
export interface IncentiveRecordBodyProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody";
  value: Uint8Array;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBodyAmino {
  /** remaining_coin is the total amount of incentives to be distributed */
  remaining_coin?: DecCoinAmino | undefined;
  /** emission_rate is the incentive emission rate per second */
  emission_rate?: string;
  /** start_time is the time when the incentive starts distributing */
  start_time?: string | undefined;
}
export interface IncentiveRecordBodyAminoMsg {
  type: "osmosis/concentratedliquidity/incentive-record-body";
  value: IncentiveRecordBodyAmino;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBodySDKType {
  remaining_coin: DecCoinSDKType | undefined;
  emission_rate: string;
  start_time: Date | undefined;
}
function createBaseIncentiveRecord(): IncentiveRecord {
  return {
    incentiveId: BigInt(0),
    poolId: BigInt(0),
    incentiveRecordBody: IncentiveRecordBody.fromPartial({}),
    minUptime: Duration.fromPartial({})
  };
}
export const IncentiveRecord = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecord",
  encode(message: IncentiveRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.incentiveId !== BigInt(0)) {
      writer.uint32(8).uint64(message.incentiveId);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.incentiveRecordBody !== undefined) {
      IncentiveRecordBody.encode(message.incentiveRecordBody, writer.uint32(34).fork()).ldelim();
    }
    if (message.minUptime !== undefined) {
      Duration.encode(message.minUptime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): IncentiveRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentiveId = reader.uint64();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.incentiveRecordBody = IncentiveRecordBody.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.minUptime = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IncentiveRecord>): IncentiveRecord {
    const message = createBaseIncentiveRecord();
    message.incentiveId = object.incentiveId !== undefined && object.incentiveId !== null ? BigInt(object.incentiveId.toString()) : BigInt(0);
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.incentiveRecordBody = object.incentiveRecordBody !== undefined && object.incentiveRecordBody !== null ? IncentiveRecordBody.fromPartial(object.incentiveRecordBody) : undefined;
    message.minUptime = object.minUptime !== undefined && object.minUptime !== null ? Duration.fromPartial(object.minUptime) : undefined;
    return message;
  },
  fromAmino(object: IncentiveRecordAmino): IncentiveRecord {
    const message = createBaseIncentiveRecord();
    if (object.incentive_id !== undefined && object.incentive_id !== null) {
      message.incentiveId = BigInt(object.incentive_id);
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.incentive_record_body !== undefined && object.incentive_record_body !== null) {
      message.incentiveRecordBody = IncentiveRecordBody.fromAmino(object.incentive_record_body);
    }
    if (object.min_uptime !== undefined && object.min_uptime !== null) {
      message.minUptime = Duration.fromAmino(object.min_uptime);
    }
    return message;
  },
  toAmino(message: IncentiveRecord, useInterfaces: boolean = false): IncentiveRecordAmino {
    const obj: any = {};
    obj.incentive_id = message.incentiveId !== BigInt(0) ? message.incentiveId.toString() : undefined;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.incentive_record_body = message.incentiveRecordBody ? IncentiveRecordBody.toAmino(message.incentiveRecordBody, useInterfaces) : undefined;
    obj.min_uptime = message.minUptime ? Duration.toAmino(message.minUptime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: IncentiveRecordAminoMsg): IncentiveRecord {
    return IncentiveRecord.fromAmino(object.value);
  },
  toAminoMsg(message: IncentiveRecord, useInterfaces: boolean = false): IncentiveRecordAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/incentive-record",
      value: IncentiveRecord.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: IncentiveRecordProtoMsg, useInterfaces: boolean = false): IncentiveRecord {
    return IncentiveRecord.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: IncentiveRecord): Uint8Array {
    return IncentiveRecord.encode(message).finish();
  },
  toProtoMsg(message: IncentiveRecord): IncentiveRecordProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecord",
      value: IncentiveRecord.encode(message).finish()
    };
  }
};
function createBaseIncentiveRecordBody(): IncentiveRecordBody {
  return {
    remainingCoin: DecCoin.fromPartial({}),
    emissionRate: "",
    startTime: new Date()
  };
}
export const IncentiveRecordBody = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody",
  encode(message: IncentiveRecordBody, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.remainingCoin !== undefined) {
      DecCoin.encode(message.remainingCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.emissionRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.emissionRate, 18).atomics);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): IncentiveRecordBody {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveRecordBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remainingCoin = DecCoin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.emissionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IncentiveRecordBody>): IncentiveRecordBody {
    const message = createBaseIncentiveRecordBody();
    message.remainingCoin = object.remainingCoin !== undefined && object.remainingCoin !== null ? DecCoin.fromPartial(object.remainingCoin) : undefined;
    message.emissionRate = object.emissionRate ?? "";
    message.startTime = object.startTime ?? undefined;
    return message;
  },
  fromAmino(object: IncentiveRecordBodyAmino): IncentiveRecordBody {
    const message = createBaseIncentiveRecordBody();
    if (object.remaining_coin !== undefined && object.remaining_coin !== null) {
      message.remainingCoin = DecCoin.fromAmino(object.remaining_coin);
    }
    if (object.emission_rate !== undefined && object.emission_rate !== null) {
      message.emissionRate = object.emission_rate;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    return message;
  },
  toAmino(message: IncentiveRecordBody, useInterfaces: boolean = false): IncentiveRecordBodyAmino {
    const obj: any = {};
    obj.remaining_coin = message.remainingCoin ? DecCoin.toAmino(message.remainingCoin, useInterfaces) : undefined;
    obj.emission_rate = message.emissionRate === "" ? undefined : message.emissionRate;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: IncentiveRecordBodyAminoMsg): IncentiveRecordBody {
    return IncentiveRecordBody.fromAmino(object.value);
  },
  toAminoMsg(message: IncentiveRecordBody, useInterfaces: boolean = false): IncentiveRecordBodyAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/incentive-record-body",
      value: IncentiveRecordBody.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: IncentiveRecordBodyProtoMsg, useInterfaces: boolean = false): IncentiveRecordBody {
    return IncentiveRecordBody.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: IncentiveRecordBody): Uint8Array {
    return IncentiveRecordBody.encode(message).finish();
  },
  toProtoMsg(message: IncentiveRecordBody): IncentiveRecordBodyProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody",
      value: IncentiveRecordBody.encode(message).finish()
    };
  }
};