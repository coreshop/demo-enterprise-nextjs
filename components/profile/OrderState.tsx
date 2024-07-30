'use client';

import React from "react";

import {OrderFragment} from "@/lib/graphql/types.generated";
import {CoreBadge} from "@/stories/Atoms/Badge/CoreBadge";
import {CoreBadgetype} from "@/stories/Atoms/Badge/types";

const OrderState = ({order}:{order:OrderFragment}) => {
  return <>
      {order.orderState === 'confirmed' ? (
          <CoreBadge variant={CoreBadgetype.Success} description={order?.orderState}  onClick={() => {}}/>
      ) : order.orderState === 'new' ? (
          <CoreBadge variant={CoreBadgetype.Info} description={order?.orderState} onClick={() => {}} />
      ) : (
          ''
      )}
  </>
};

export default OrderState;