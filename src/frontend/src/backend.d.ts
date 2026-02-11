import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    id: bigint;
    formData: LeadCaptureFormData;
    submittedBy: Principal;
    timestamp: Time;
}
export type Time = bigint;
export interface LeadCaptureFormData {
    propertyType: PropertyType;
    name: string;
    usageType: UsageType;
    phone: string;
    budget: string;
}
export interface CommercialProject {
    id: bigint;
    title: string;
    carpetArea: string;
    lastUpdated: Time;
    highlights: Array<string>;
    price: string;
    location: string;
    contactDetails: string;
}
export interface UserProfile {
    name: string;
}
export enum PropertyType {
    commercial = "commercial",
    house = "house",
    other = "other",
    land = "land",
    apartment = "apartment"
}
export enum UsageType {
    investment = "investment",
    selfUse = "selfUse"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createCommercialProject(project: CommercialProject): Promise<bigint>;
    deleteCommercialProject(id: bigint): Promise<void>;
    deleteLead(id: bigint): Promise<void>;
    getAllCommercialProjects(): Promise<Array<CommercialProject>>;
    getAllLeads(): Promise<Array<Lead>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getCommercialProject(id: bigint): Promise<CommercialProject | null>;
    getLead(id: bigint): Promise<Lead>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitLead(formData: LeadCaptureFormData): Promise<bigint>;
    updateCommercialProject(id: bigint, updatedProject: CommercialProject): Promise<void>;
    updateLead(id: bigint, newFormData: LeadCaptureFormData): Promise<void>;
}
