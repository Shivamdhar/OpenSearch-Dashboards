/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import { htmlIdGenerator } from '@elastic/eui/lib/services';
import React, { useState, Fragment } from 'react';

import {
  EuiButton,
  EuiFilePicker,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiSpacer,
  EuiSwitch,
  EuiForm,
  EuiFormRow,
} from '@elastic/eui';

export type CustomVectorUploadProps = {
  getServiceSettings: () => Promise<IServiceSettings>;
} & VisOptionsProps<RegionMapVisParams>;

function CustomVectorUpload(props: CustomVectorUploadProps) {
  const [file, setFile] = useState({});
  const [large, setLarge] = useState(true);

  const onChange = (files) => {
    setFiles(files);
  };

  return (
    <Fragment>
      <EuiForm component="form">
        <EuiFormRow>
          <EuiFilePicker
            id="asdf2"
            multiple
            initialPromptText="Select or drag and drop a json file"
            onChange={(files) => {
              onChange(files);
            }}
            display={large ? 'large' : 'default'}
            aria-label="Use aria labels when no actual label is in use"
          />
        </EuiFormRow>
        <EuiSpacer />
        <EuiFormRow>
          <EuiButton type="submit" fill>
            Import
          </EuiButton>
        </EuiFormRow>
      </EuiForm>
    </Fragment>
  );
}

export { CustomVectorUpload };
