import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "site_reports",
      columns: [
        { name: "site_id", type: "string" },
        { name: "inverter_serial", type: "string" },
        { name: "generation_kw", type: "number" },
        { name: "panel_condition", type: "string" },
        { name: "created_at", type: "number" },
        { name: "is_synced", type: "boolean" },
      ],
    }),
  ],
});
