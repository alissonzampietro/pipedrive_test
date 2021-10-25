export type OrganizationPayload = {
    org_name: string;
    daughters?: Array<OrganizationPayload> 
}

export type Organization = {
    id: number;
    name: string;
    index_name: string;
}