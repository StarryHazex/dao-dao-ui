import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * @param domain_id
 * @param address
 */
export interface RemoteTokenMessenger {
  domainId: number;
  address: Uint8Array;
}
export interface RemoteTokenMessengerProtoMsg {
  typeUrl: "/circle.cctp.v1.RemoteTokenMessenger";
  value: Uint8Array;
}
/**
 * @param domain_id
 * @param address
 */
export interface RemoteTokenMessengerAmino {
  domain_id?: number;
  address?: string;
}
export interface RemoteTokenMessengerAminoMsg {
  type: "/circle.cctp.v1.RemoteTokenMessenger";
  value: RemoteTokenMessengerAmino;
}
/**
 * @param domain_id
 * @param address
 */
export interface RemoteTokenMessengerSDKType {
  domain_id: number;
  address: Uint8Array;
}
function createBaseRemoteTokenMessenger(): RemoteTokenMessenger {
  return {
    domainId: 0,
    address: new Uint8Array()
  };
}
export const RemoteTokenMessenger = {
  typeUrl: "/circle.cctp.v1.RemoteTokenMessenger",
  encode(message: RemoteTokenMessenger, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.domainId !== 0) {
      writer.uint32(8).uint32(message.domainId);
    }
    if (message.address.length !== 0) {
      writer.uint32(18).bytes(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): RemoteTokenMessenger {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoteTokenMessenger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domainId = reader.uint32();
          break;
        case 2:
          message.address = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RemoteTokenMessenger>): RemoteTokenMessenger {
    const message = createBaseRemoteTokenMessenger();
    message.domainId = object.domainId ?? 0;
    message.address = object.address ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RemoteTokenMessengerAmino): RemoteTokenMessenger {
    const message = createBaseRemoteTokenMessenger();
    if (object.domain_id !== undefined && object.domain_id !== null) {
      message.domainId = object.domain_id;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    return message;
  },
  toAmino(message: RemoteTokenMessenger, useInterfaces: boolean = false): RemoteTokenMessengerAmino {
    const obj: any = {};
    obj.domain_id = message.domainId;
    obj.address = message.address ? base64FromBytes(message.address) : undefined;
    return obj;
  },
  fromAminoMsg(object: RemoteTokenMessengerAminoMsg): RemoteTokenMessenger {
    return RemoteTokenMessenger.fromAmino(object.value);
  },
  fromProtoMsg(message: RemoteTokenMessengerProtoMsg, useInterfaces: boolean = false): RemoteTokenMessenger {
    return RemoteTokenMessenger.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RemoteTokenMessenger): Uint8Array {
    return RemoteTokenMessenger.encode(message).finish();
  },
  toProtoMsg(message: RemoteTokenMessenger): RemoteTokenMessengerProtoMsg {
    return {
      typeUrl: "/circle.cctp.v1.RemoteTokenMessenger",
      value: RemoteTokenMessenger.encode(message).finish()
    };
  }
};