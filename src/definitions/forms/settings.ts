export const SettingsFormSchema = {
    jsonSchema: {
      title: "OnTrac Settings",
      description: "Your OnTrac account information is shown below",
      type: "object",
      properties: {
        account_number: {
          type: "string",
          title: "Account Number",
        },
      },
    },
    uiSchema: {
      account_number: {
        "ui:readonly": true,
      },
    },
};
