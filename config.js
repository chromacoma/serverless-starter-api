const stage = process.env.stage;
const resourcesStage = process.env.resourcesStage;

const stageConfigs = {
  dev: {
    userPoolId: '__DEV_USER_POOL_ID__',
    filesBucket: '__DEV_S3_FILES_BUCKET__',
    contactEmail: '__DEV_CONTACT_EMAIL__',
    contactEmailArn: '__DEV_CONTACT_EMAIL_ARN__',
  },
  prod: {
    userPoolId: '__PROD_USER_POOL_ID__',
    filesBucket: '__PROD_S3_FILES_BUCKET__',
    contactEmail: '__PROD_CONTACT_EMAIL__',
    contactEmailArn: '__PROD_CONTACT_EMAIL_ARN__',
  },
};

const config = stageConfigs[stage] || stageConfigs.dev;

export default {
  stage,
  resourcesStage,
  ...config,
};
