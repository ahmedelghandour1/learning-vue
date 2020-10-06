module.exports = {
  client: {
    service: {
      name: "my-app",
      // URL to the GraphQL API
      url: "https://hasura.io/learn/graphql",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDVmMTMyNTc0MDUxN2M1MDAxM2I3MjdmMyJ9LCJuaWNrbmFtZSI6ImVsZ2hhbmRvdXIuMTIiLCJuYW1lIjoiZWxnaGFuZG91ci4xMkBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMDQ1NDYzYmY1MmVlYWMzZjhmZTljYjQwMzdkODczMDI_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZlbC5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMC0wOC0yNVQyMjoxMzo0NS4wNDhaIiwiaXNzIjoiaHR0cHM6Ly9ncmFwaHFsLXR1dG9yaWFscy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWYxMzI1NzQwNTE3YzUwMDEzYjcyN2YzIiwiYXVkIjoiUDM4cW5GbzFsRkFRSnJ6a3VuLS13RXpxbGpWTkdjV1ciLCJpYXQiOjE1OTg1NzU1NDUsImV4cCI6MTU5ODYxMTU0NSwiYXRfaGFzaCI6IklPbnhWeEU3YkR6U0FxZC1LZ3QxcGciLCJub25jZSI6IkF2bFVYRjhpdmpnVmVGRjRhbm1uaThObmdRUGVIMGdIIn0.GAiUlbBUP6URWdHhaDKOrSTNTAhUPURmo3v3_myWYDyqwF4cARuvhZh78RNxNDUcRglRh2wxPiemV4kwQW8j_CFitS1nmGnf7UQVLtUFjvR0LkultbrW7sUKWswPl0P7Fz5wdy8jcqsg3smyf8WXyjVYK_0xVfPnplEmjdiodnkVhfUowHG0SEIGto70Priof_TvoJG6XEJrUoBNDXBtq32y1hUX_z9cdydgjuMYymeF_OXpw4VGT-RZ2BrF_naKeplibyuGcu2Tj4Lsmseruo9KPMkAiBiS4oatRuYR6v8qgBpI4xAYaSWvfQMn2EmjAIgPlbmeUYwWjZOIUg06BQ",
        type: "application/json"
      },
      //
      skipSSLValidation: true
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"]
  }
};
