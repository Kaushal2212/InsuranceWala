package com.example.ins.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class BuyPolicy {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long pId;
	
	@Column(name = "policy_number", unique = true, nullable = true)
	private Long policyNumber;
	
	@Column(name="policyName")
	private String PolicyName;
	
	@Column(name="policyType")
	private String PolicyType;
	
	@Column(name="policyPremium")
	private String PolicyPremium;
	
	@Column(name="policyDescription")
	private String PolicyDescription;
	
	private String clientId;
	
	private String paymentId;

	public Long getpId() {
		return pId;
	}

	public void setpId(Long pId) {
		this.pId = pId;
	}

	public Long getPolicyNumber() {
		return policyNumber;
	}

	public void setPolicyNumber(Long policyNumber) {
		this.policyNumber = policyNumber;
	}

	public String getPolicyName() {
		return PolicyName;
	}

	public void setPolicyName(String policyName) {
		PolicyName = policyName;
	}

	public String getPolicyType() {
		return PolicyType;
	}

	public void setPolicyType(String policyType) {
		PolicyType = policyType;
	}

	public String getPolicyPremium() {
		return PolicyPremium;
	}

	public void setPolicyPremium(String policyPremium) {
		PolicyPremium = policyPremium;
	}

	public String getPolicyDescription() {
		return PolicyDescription;
	}

	public void setPolicyDescription(String policyDescription) {
		PolicyDescription = policyDescription;
	}

	public String getClientId() {
		return clientId;
	}

	public void setClientId(String clientId) {
		this.clientId = clientId;
	}

	public String getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}

	

}
