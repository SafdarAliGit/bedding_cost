// Copyright (c) 2023, Tech Venture and contributors
// For license information, please see license.txt
const YARN = {
    'yarn_weight_warp': 0,
    'yarn_weight_weft': 0,
    'warp_yarn_cost': 0,
    'weft_yarn_cost': 0,

}
frappe.ui.form.on('Bedding Costing', {
    qty: function (frm) {
        clculateMain(frm);
    },
    conversion_per_pick: function (frm) {
        clculateMain(frm);
    },
    freight: function (frm) {
        clculateMain(frm);
    },
    overhead_percent: function (frm) {
        clculateMain(frm);
    },
    profit_percent:function (frm){
        clculateMain(frm);
    },
    tax_percent:function (frm){
        clculateMain(frm);
    }
});


frappe.ui.form.on('Bedding Costing Warp Item', {
    // refresh: function(frm) {

    // }
    width: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var warp_density = (d.loom_reed / d.warp_count) * d.width * 0.0014;
        frappe.model.set_value(cdt, cdn, "warp_density", warp_density.toFixed(5));
        var yarn_weight = (d.width * d.loom_reed * 1.0936 / 840 / d.warp_count) * d.wastage_percent;
        frappe.model.set_value(cdt, cdn, "yarn_weight", yarn_weight.toFixed(5));
        var cost = d.yarn_weight * d.yarn_rate;
        frappe.model.set_value(cdt, cdn, "cost", cost.toFixed(5));
        var warp_density = (d.loom_reed / d.warp_count) * d.width * 0.0014;
        frappe.model.set_value(cdt, cdn, "warp_density", warp_density.toFixed(5));
        YARN.yarn_weight_warp = d.yarn_weight;
        YARN.warp_yarn_cost = d.cost;
        calculateMISL(frm);
    },
    loom_reed: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var warp_density = (d.loom_reed / d.warp_count) * d.width * 0.0014;
        frappe.model.set_value(cdt, cdn, "warp_density", warp_density.toFixed(5));
        var yarn_weight = (d.width * d.loom_reed * 1.0936 / 840 / d.warp_count) * d.wastage_percent;
        frappe.model.set_value(cdt, cdn, "yarn_weight", yarn_weight.toFixed(5));
        var cost = d.yarn_weight * d.yarn_rate;
        frappe.model.set_value(cdt, cdn, "cost", cost.toFixed(5));
        var warp_density = (d.loom_reed / d.warp_count) * d.width * 0.0014;
        frappe.model.set_value(cdt, cdn, "warp_density", warp_density.toFixed(5));
        YARN.yarn_weight_warp = d.yarn_weight;
        YARN.warp_yarn_cost = d.cost;
        calculateMISL(frm);
    },
    warp_count: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var warp_density = (d.loom_reed / d.warp_count) * d.width * 0.0014;
        frappe.model.set_value(cdt, cdn, "warp_density", warp_density.toFixed(5));
        var yarn_weight = (d.width * d.loom_reed * 1.0936 / 840 / d.warp_count) * d.wastage_percent;
        frappe.model.set_value(cdt, cdn, "yarn_weight", yarn_weight.toFixed(5));
        var cost = d.yarn_weight * d.yarn_rate;
        frappe.model.set_value(cdt, cdn, "cost", cost.toFixed(5));
        var warp_density = (d.loom_reed / d.warp_count) * d.width * 0.0014;
        frappe.model.set_value(cdt, cdn, "warp_density", warp_density.toFixed(5));
        YARN.yarn_weight_warp = d.yarn_weight;
        YARN.warp_yarn_cost = d.cost;
        calculateMISL(frm);
    },
    wastage_percent: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var yarn_weight = (d.width * d.loom_reed * 1.0936 / 840 / d.warp_count) * d.wastage_percent;
        frappe.model.set_value(cdt, cdn, "yarn_weight", yarn_weight.toFixed(5));
        var cost = d.yarn_weight * d.yarn_rate;
        frappe.model.set_value(cdt, cdn, "cost", cost.toFixed(5));
        YARN.yarn_weight_warp = d.yarn_weight;
        YARN.warp_yarn_cost = d.cost;
        calculateMISL(frm);
    },

    yarn_rate: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var cost = d.yarn_weight * d.yarn_rate;
        frappe.model.set_value(cdt, cdn, "cost", cost.toFixed(5));
        YARN.warp_yarn_cost = d.cost;
        calculateMISL(frm);
    }


});

frappe.ui.form.on('Bedding Costing Weft Item', {
    // refresh: function(frm) {

    // }
    width: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var weft_density = (d.pick_on_table / d.weft_count) * d.width * 0.0014;
        frappe.model.set_value(cdt, cdn, "weft_density", weft_density.toFixed(5));
        var yarn_weight = (d.width * d.pick_on_table * 1.0936 / 840 / d.weft_count) * d.wastage_percent;
        frappe.model.set_value(cdt, cdn, "yarn_weight", yarn_weight.toFixed(5));
        var cost = d.yarn_weight * d.yarn_rate;
        frappe.model.set_value(cdt, cdn, "cost", cost.toFixed(5));
        YARN.yarn_weight_weft = d.yarn_weight;
        YARN.weft_yarn_cost = d.cost;
        frm.set_value('pick_on_table', d.pick_on_table);
        calculateMISL(frm);
    },

    weft_count: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var weft_density = (d.pick_on_table / d.weft_count) * d.width * 0.0014;
        frappe.model.set_value(cdt, cdn, "weft_density", weft_density.toFixed(5));
        var yarn_weight = (d.width * d.pick_on_table * 1.0936 / 840 / d.weft_count) * d.wastage_percent;
        frappe.model.set_value(cdt, cdn, "yarn_weight", yarn_weight.toFixed(5));
        var cost = d.yarn_weight * d.yarn_rate;
        frappe.model.set_value(cdt, cdn, "cost", cost.toFixed(5));
        YARN.yarn_weight_weft = d.yarn_weight;
        YARN.weft_yarn_cost = d.cost;
        frm.set_value('pick_on_table', d.pick_on_table);
        calculateMISL(frm);
    },
    pick_on_table: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var weft_density = (d.pick_on_table / d.weft_count) * d.width * 0.0014;
        frappe.model.set_value(cdt, cdn, "weft_density", weft_density.toFixed(5));
        var yarn_weight = (d.width * d.pick_on_table * 1.0936 / 840 / d.weft_count) * d.wastage_percent;
        frappe.model.set_value(cdt, cdn, "yarn_weight", yarn_weight.toFixed(5));
        var cost = d.yarn_weight * d.yarn_rate;
        frappe.model.set_value(cdt, cdn, "cost", cost.toFixed(5));
        YARN.yarn_weight_weft = d.yarn_weight;
        YARN.weft_yarn_cost = d.cost;
        frm.set_value('pick_on_table', d.pick_on_table);
        frm.set_value('conversion_cost', parseFloat(frm.doc.conversion_per_pick * frm.doc.pick_on_table).toFixed(5));
        calculateMISL(frm);
    },
    wastage_percent: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var yarn_weight = (d.width * d.pick_on_table * 1.0936 / 840 / d.weft_count) * d.wastage_percent;
        frappe.model.set_value(cdt, cdn, "yarn_weight", yarn_weight.toFixed(5));
        var cost = d.yarn_weight * d.yarn_rate;
        frappe.model.set_value(cdt, cdn, "cost", cost.toFixed(5));
        YARN.yarn_weight_weft = d.yarn_weight;
        YARN.weft_yarn_cost = d.cost;
        frm.set_value('pick_on_table', d.pick_on_table);
        calculateMISL(frm);

    },
    yarn_rate: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var cost = d.yarn_weight * d.yarn_rate;
        frappe.model.set_value(cdt, cdn, "cost", cost.toFixed(5));
        YARN.weft_yarn_cost = d.cost;
        frm.set_value('pick_on_table', d.pick_on_table);
        calculateMISL(frm);
    }


});


function calculateMISL(frm) {
    frm.set_value('yarn_consumption_per_piece', (parseFloat(YARN.yarn_weight_warp) + parseFloat(YARN.yarn_weight_weft)).toFixed(5));
    frm.set_value('warp_ratio', ((parseFloat(YARN.yarn_weight_warp).toFixed(5) / frm.doc.yarn_consumption_per_piece) * 100).toFixed(5));
    frm.set_value('weft_ratio', ((parseFloat(YARN.yarn_weight_weft).toFixed(5) / frm.doc.yarn_consumption_per_piece) * 100).toFixed(5));
    frm.set_value('total_yarn_required', parseFloat(frm.doc.yarn_consumption_per_piece * frm.doc.qty).toFixed(5));
    frm.set_value('warp_yarn_cost', parseFloat(YARN.warp_yarn_cost).toFixed(5));
    frm.set_value('weft_yarn_cost', parseFloat(YARN.weft_yarn_cost).toFixed(5));
    frm.set_value('actual_fabric_cost', parseFloat(parseFloat(frm.doc.conversion_per_pick) + parseFloat(YARN.warp_yarn_cost) + parseFloat(YARN.weft_yarn_cost) + parseFloat(frm.doc.conversion_cost) + parseFloat(frm.doc.freight)).toFixed(5));
    frm.set_value('cost_with_overhead', (parseFloat(frm.doc.actual_fabric_cost) + (parseFloat(frm.doc.actual_fabric_cost) * (parseFloat(frm.doc.overhead_percent / 100)))).toFixed(5));
    frm.set_value('cost_with_profit',(parseFloat(frm.doc.cost_with_overhead) + (parseFloat(frm.doc.cost_with_overhead)  *  (parseFloat(frm.doc.profit_percent/100)))).toFixed(5))
    frm.set_value('net_cost',(parseFloat(frm.doc.cost_with_profit) + (parseFloat(frm.doc.cost_with_profit) * (parseFloat(frm.doc.tax_percent /100)))).toFixed(5));
}

function clculateMain(frm) {
    frm.set_value('total_yarn_required', parseFloat(frm.doc.yarn_consumption_per_piece * frm.doc.qty).toFixed(5));
    frm.set_value('conversion_cost', parseFloat(frm.doc.conversion_per_pick * frm.doc.pick_on_table).toFixed(5));
    frm.set_value('actual_fabric_cost', parseFloat(parseFloat(frm.doc.conversion_per_pick) + parseFloat(YARN.warp_yarn_cost) + parseFloat(YARN.weft_yarn_cost) + parseFloat(frm.doc.conversion_cost) + parseFloat(frm.doc.freight)).toFixed(5))
    frm.set_value('cost_with_overhead', (parseFloat(frm.doc.actual_fabric_cost) + (parseFloat(frm.doc.actual_fabric_cost) * (parseFloat(frm.doc.overhead_percent / 100)))).toFixed(5));
    frm.set_value('cost_with_profit',(parseFloat(frm.doc.cost_with_overhead) + (parseFloat(frm.doc.cost_with_overhead)  *  (parseFloat(frm.doc.profit_percent/100)))).toFixed(5))
    frm.set_value('net_cost',(parseFloat(frm.doc.cost_with_profit) + (parseFloat(frm.doc.cost_with_profit) * (parseFloat(frm.doc.tax_percent /100)))).toFixed(5));

}


