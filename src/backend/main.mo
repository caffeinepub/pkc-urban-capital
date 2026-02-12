import Map "mo:core/Map";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the user system state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Management
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Lead Capture System
  public type PropertyType = {
    #apartment;
    #house;
    #commercial;
    #land;
    #other;
  };

  public type UsageType = {
    #investment;
    #selfUse;
  };

  public type LeadCaptureFormData = {
    name : Text;
    phone : Text;
    budget : Text;
    propertyType : PropertyType;
    usageType : UsageType;
  };

  public type Lead = {
    id : Nat;
    timestamp : Time.Time;
    formData : LeadCaptureFormData;
    submittedBy : Principal;
  };

  let leads = Map.empty<Nat, Lead>();
  var nextLeadId = 0;

  // Submit a new lead - PUBLIC (no auth required for lead capture)
  public shared ({ caller }) func submitLead(formData : LeadCaptureFormData) : async Nat {
    let leadId = nextLeadId;
    nextLeadId += 1;

    let lead : Lead = {
      id = leadId;
      timestamp = Time.now();
      formData;
      submittedBy = caller;
    };

    leads.add(leadId, lead);
    leadId;
  };

  // Retrieve a single lead by ID (admin only)
  public query ({ caller }) func getLead(id : Nat) : async Lead {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can retrieve leads");
    };

    switch (leads.get(id)) {
      case (?lead) { lead };
      case (null) {
        Runtime.trap("Lead not found");
      };
    };
  };

  // Retrieve all leads (admin only)
  public query ({ caller }) func getAllLeads() : async [Lead] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can retrieve all leads");
    };
    leads.values().toArray();
  };

  // Delete a lead by ID (admin only)
  public shared ({ caller }) func deleteLead(id : Nat) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete leads");
    };

    if (leads.containsKey(id)) {
      leads.remove(id);
    } else {
      Runtime.trap("Lead not found");
    };
  };

  // Update an existing lead (admin only)
  public shared ({ caller }) func updateLead(id : Nat, newFormData : LeadCaptureFormData) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update leads");
    };

    switch (leads.get(id)) {
      case (?existingLead) {
        let updatedLead : Lead = {
          id = existingLead.id;
          timestamp = Time.now();
          formData = newFormData;
          submittedBy = existingLead.submittedBy;
        };
        leads.add(id, updatedLead);
      };
      case (null) {
        Runtime.trap("Lead not found");
      };
    };
  };

  // Commercial Project Listings
  public type CommercialProject = {
    id : Nat;
    title : Text;
    location : Text;
    carpetArea : Text;
    price : Text;
    highlights : [Text];
    contactDetails : Text;
    lastUpdated : Time.Time;
  };

  let commercialProjects = Map.empty<Nat, CommercialProject>();
  var nextCommercialProjectId = 0;

  // Admin-only: Create new commercial project
  public shared ({ caller }) func createCommercialProject(project : CommercialProject) : async Nat {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can create commercial projects");
    };

    let projectId = nextCommercialProjectId;
    nextCommercialProjectId += 1;

    let newProject : CommercialProject = {
      id = projectId;
      title = project.title;
      location = project.location;
      carpetArea = project.carpetArea;
      price = project.price;
      highlights = project.highlights;
      contactDetails = project.contactDetails;
      lastUpdated = Time.now();
    };

    commercialProjects.add(projectId, newProject);
    projectId;
  };

  // Admin-only: Update existing commercial project
  public shared ({ caller }) func updateCommercialProject(id : Nat, updatedProject : CommercialProject) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update commercial projects");
    };

    switch (commercialProjects.get(id)) {
      case (?_) {
        let newProject : CommercialProject = {
          id;
          title = updatedProject.title;
          location = updatedProject.location;
          carpetArea = updatedProject.carpetArea;
          price = updatedProject.price;
          highlights = updatedProject.highlights;
          contactDetails = updatedProject.contactDetails;
          lastUpdated = Time.now();
        };
        commercialProjects.add(id, newProject);
      };
      case (null) {
        Runtime.trap("Commercial project not found");
      };
    };
  };

  // Admin-only: Delete commercial project
  public shared ({ caller }) func deleteCommercialProject(id : Nat) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete commercial projects");
    };

    if (commercialProjects.containsKey(id)) {
      commercialProjects.remove(id);
    } else {
      Runtime.trap("Commercial project not found");
    };
  };

  // Public: Get all commercial projects
  public query ({ caller }) func getAllCommercialProjects() : async [CommercialProject] {
    commercialProjects.values().toArray();
  };

  // Public: Get single commercial project by ID
  public query ({ caller }) func getCommercialProject(id : Nat) : async ?CommercialProject {
    commercialProjects.get(id);
  };
};
