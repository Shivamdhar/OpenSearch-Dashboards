/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { schema } from '@osd/config-schema';

// eslint-disable-next-line import/no-default-export
export default function (services, router) {
  router.post(
    {
      path: '/api/geospatial/_upload',
      validate: {
        body: schema.any(),
      },
    },
    services.uploadGeojson
  );
}
