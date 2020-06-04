/*
 * Copyright 2016 e-UCM (http://www.e-ucm.es/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * This project has received funding from the European Union’s Horizon
 * 2020 research and innovation programme under grant agreement No 644187.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0 (link is external)
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

exports.port = process.env.PORT || 3000;
exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || '{{mongodbUrl}}'
};
exports.redisdb = {
  host: '{{redisHost}}',
  port: {{redisPort}},
  dbNumber: {{redisNumber}}
};
exports.maxSizeRequest =  '{{maxSizeRequest}}';
exports.maxSizeRequest =  '{{maxSizeVisualizations}}';
exports.apiPath = '{{apiPath}}';
exports.companyName = '{{companyName}}';
exports.projectName = '{{projectName}}';
exports.systemEmail = '{{systemEmail}}';
exports.cryptoKey = '{{cryptoKey}}';
exports.loginAttempts = {
  failedLoginAttempts: '{{failedLoginAttempts}}'
};
exports.tokenExpirationInSeconds = 7 * 86400;
exports.requireAccountVerification = false;
exports.smtp = {
  from: {
    name: process.env.SMTP_FROM_NAME || exports.projectName,
    address: process.env.SMTP_FROM_ADDRESS || exports.systemEmail
  },
  credentials: {
    user: process.env.SMTP_USERNAME || '{{smtpUsername}}',
    password: process.env.SMTP_PASSWORD || '{{smtpPassword}}',
    host: process.env.SMTP_HOST || '{{smtpHost}}',
    ssl: process.env.SMTP_SSL || {{smtpSsl}}
  }
};