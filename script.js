const state = {
  paymentLabel: "付款金额1",
  customerMode: "选填",
  customerLabel: "顾客名称",
  customerVisible: "展示",
  phoneMode: "选填",
  phoneLabel: "联系电话",
  phoneVisible: "展示",
  businessMode: "选填",
  businessLabel: "业务单号",
  businessVisible: "展示",
  titleMode: "选填",
  titleLabel: "订单主题",
  titleVisible: "展示",
  descMode: "选填",
  descLabel: "订单描述",
  descVisible: "展示",
  remarkMode: "选填",
  remarkLabel: "备注",
  remarkVisible: "展示",
  extraMode: "必填",
  extraLabel: "拓展字段",
  extraVisible: "展示",
  expiryValue: "7",
  expiryUnit: "day",
};

const unitText = {
  minute: "分钟",
  hour: "小时",
  day: "天",
};

const maxByUnit = {
  minute: 30 * 24 * 60,
  hour: 30 * 24,
  day: 30,
};

const orders = [
  {
    internalOrderNo: "1001247732345132",
    createdAt: "2026-06-17 10:12:36",
    amount: "¥90,100.00",
    customerName: "王先生",
    orderTitle: "拍品尾款",
    orderDescription: "春拍 Lot 215 尾款",
    businessOrderNo: "SO202606170001",
    liteposOrderNo: "-",
    store: "上海一号门店",
    salesName: "李明",
    paymentMethod: "远程收款",
    orderStatus: "待收款",
    refundStatus: "未退款",
    completedAt: "-",
    paymentLink: "https://i.wosai.cn/5156Bd",
  },
  {
    internalOrderNo: "1001247732345133",
    createdAt: "2026-06-17 09:48:20",
    amount: "¥218,000.00",
    customerName: "陈女士",
    orderTitle: "拍品保证金",
    orderDescription: "夜场拍卖保证金",
    businessOrderNo: "SO202606170002",
    liteposOrderNo: "790324770903304",
    store: "北京旗舰店",
    salesName: "周倩",
    paymentMethod: "远程收款",
    orderStatus: "收款中",
    refundStatus: "未退款",
    completedAt: "-",
    paymentLink: "https://i.wosai.cn/8K2mQ9",
  },
  {
    internalOrderNo: "1001247732345134",
    createdAt: "2026-06-16 18:31:07",
    amount: "¥56,800.00",
    customerName: "赵先生",
    orderTitle: "拍品尾款",
    orderDescription: "珠宝专场尾款",
    businessOrderNo: "SO202606160009",
    liteposOrderNo: "790324770666999",
    store: "上海一号门店",
    salesName: "王珊",
    paymentMethod: "POS 收款",
    orderStatus: "收款成功",
    refundStatus: "未退款",
    completedAt: "2026-06-16 19:02:44",
    paymentLink: "https://i.wosai.cn/n7X4Pa",
  },
  {
    internalOrderNo: "1001247732345135",
    createdAt: "2026-06-15 14:22:51",
    amount: "¥130,000.00",
    customerName: "林女士",
    orderTitle: "拍品尾款",
    orderDescription: "腕表专场尾款",
    businessOrderNo: "SO202606150006",
    liteposOrderNo: "790324770663336",
    store: "深圳湾门店",
    salesName: "陈杰",
    paymentMethod: "当面收款",
    orderStatus: "已取消",
    refundStatus: "未退款",
    completedAt: "-",
    paymentLink: "https://i.wosai.cn/3hR8Tq",
  },
  {
    internalOrderNo: "1001247732345136",
    createdAt: "2026-06-14 16:08:19",
    amount: "¥76,200.00",
    customerName: "沈女士",
    orderTitle: "拍品尾款",
    orderDescription: "瓷器专场尾款",
    businessOrderNo: "SO202606140011",
    liteposOrderNo: "790324770664300",
    store: "广州中心店",
    salesName: "唐宁",
    paymentMethod: "远程收款",
    orderStatus: "收款成功",
    refundStatus: "部分退款",
    completedAt: "2026-06-14 16:39:52",
    paymentLink: "https://i.wosai.cn/K6d2Vz",
  },
  {
    internalOrderNo: "1001247732345137",
    createdAt: "2026-06-13 13:45:26",
    amount: "¥42,500.00",
    customerName: "吴先生",
    orderTitle: "拍品尾款",
    orderDescription: "艺术品拍卖尾款",
    businessOrderNo: "SO202606100015",
    liteposOrderNo: "790324770664358",
    store: "杭州中心店",
    salesName: "刘洋",
    paymentMethod: "POS 收款",
    orderStatus: "收款成功",
    refundStatus: "已全额退款",
    completedAt: "2026-06-13 14:02:37",
    paymentLink: "https://i.wosai.cn/m9Y5Lc",
  },
  {
    internalOrderNo: "1001247732345138",
    createdAt: "2026-06-12 11:09:18",
    amount: "¥315,000.00",
    customerName: "郑女士",
    orderTitle: "拍品尾款",
    orderDescription: "当代艺术专场尾款",
    businessOrderNo: "SO202606120021",
    liteposOrderNo: "790324770660072",
    store: "成都中心店",
    salesName: "高远",
    paymentMethod: "当面收款",
    orderStatus: "收款成功",
    refundStatus: "未退款",
    completedAt: "-",
    paymentLink: "https://i.wosai.cn/Z2p7Nb",
  },
];

const orderDetails = {
  "1001247732345132": {
    phone: "1234323423",
    validDuration: "7 天",
    expireAt: "2026-06-24 10:12:36",
    paidAmount: "-",
    refundedAmount: "-",
    refundStatus: "未退款",
    transactions: [],
  },
  "790324770903304": {
    phone: "13900001234",
    validDuration: "7 天",
    expireAt: "2026-06-24 09:48:20",
    paidAmount: "¥100,000.00",
    refundedAmount: "-",
    refundStatus: "未退款",
    transactions: [
      {
        tradedAt: "2026-06-17 10:03:18",
        liteposFlowNo: "626061700098938045",
        sqbTradeNo: "SQB20260617100318001",
        channelFlowNo: "CH20260617100318001",
        type: "支付",
        paymentMethod: "银行卡",
        transactionAmount: "¥100,000.00",
        receivedAmount: "¥100,000.00",
        status: "支付成功",
      },
    ],
  },
  "790324770666999": {
    phone: "13600005678",
    validDuration: "7 天",
    expireAt: "2026-06-23 18:31:07",
    paidAmount: "¥56,800.00",
    refundedAmount: "-",
    refundStatus: "未退款",
    transactions: [
      {
        tradedAt: "2026-06-16 19:02:44",
        liteposFlowNo: "626061600078800216",
        sqbTradeNo: "SQB20260616190244009",
        channelFlowNo: "CH20260616190244009",
        type: "支付",
        paymentMethod: "微信支付",
        transactionAmount: "¥56,800.00",
        receivedAmount: "¥56,800.00",
        status: "支付成功",
      },
    ],
  },
  "790324770663336": {
    phone: "13800009876",
    validDuration: "7 天",
    expireAt: "2026-06-22 14:22:51",
    paidAmount: "-",
    refundedAmount: "-",
    refundStatus: "未退款",
    transactions: [],
  },
  "790324770664300": {
    phone: "13700003456",
    validDuration: "7 天",
    expireAt: "2026-06-21 16:08:19",
    paidAmount: "¥38,100.00",
    refundedAmount: "¥38,100.00",
    refundStatus: "部分退款",
    transactions: [
      {
        tradedAt: "2026-06-14 16:39:52",
        liteposFlowNo: "626061400056210443",
        sqbTradeNo: "SQB20260614163952006",
        channelFlowNo: "CH20260614163952006",
        type: "支付",
        paymentMethod: "支付宝",
        transactionAmount: "¥76,200.00",
        receivedAmount: "¥76,200.00",
        status: "部分退款",
      },
    ],
  },
  "790324770664358": {
    phone: "13500007890",
    validDuration: "7 天",
    expireAt: "2026-06-20 13:45:26",
    paidAmount: "¥0.00",
    refundedAmount: "¥42,500.00",
    refundStatus: "已全额退款",
    transactions: [
      {
        tradedAt: "2026-06-13 14:02:37",
        liteposFlowNo: "626061300044931522",
        sqbTradeNo: "SQB20260613140237015",
        channelFlowNo: "CH20260613140237015",
        type: "支付",
        paymentMethod: "银行卡",
        transactionAmount: "¥42,500.00",
        receivedAmount: "¥42,500.00",
        status: "已全额退款",
      },
    ],
  },
  "790324770660072": {
    phone: "13200006789",
    validDuration: "7 天",
    expireAt: "2026-06-19 11:09:18",
    paidAmount: "¥315,000.00",
    refundedAmount: "-",
    refundStatus: "未退款",
    transactions: [
      {
        tradedAt: "2026-06-12 11:29:04",
        liteposFlowNo: "626061200031892507",
        sqbTradeNo: "SQB20260612112904021",
        channelFlowNo: "CH20260612112904021",
        type: "支付",
        paymentMethod: "银行卡",
        transactionAmount: "¥315,000.00",
        receivedAmount: "¥315,000.00",
        status: "支付成功",
      },
    ],
  },
};

const app = document.querySelector(".app");
const pageActions = document.querySelector("#pageActions");
const editBtn = document.querySelector("#editBtn");
const expiryValue = document.querySelector("#expiryValue");
const expiryUnit = document.querySelector("#expiryUnit");
const expiryHelp = document.querySelector("#expiryHelp");
const expiryEditor = document.querySelector(".expiry-editor");
const toast = document.querySelector("#toast");
const sideItems = document.querySelectorAll("[data-page]");
const panels = document.querySelectorAll("[data-panel]");
const orderFilters = document.querySelector("#orderFilters");
const ordersBody = document.querySelector("#ordersBody");
const tableCount = document.querySelector("#tableCount");
const paginationText = document.querySelector("#paginationText");
const columnSettingBtn = document.querySelector("#columnSettingBtn");
const columnPanel = document.querySelector("#columnPanel");
const tableWrap = document.querySelector(".table-wrap");
const paymentLinkModal = document.querySelector("#paymentLinkModal");
const modalAmount = document.querySelector("#modalAmount");
const modalCustomerName = document.querySelector("#modalCustomerName");
const modalOrderTitle = document.querySelector("#modalOrderTitle");
const modalOrderDescription = document.querySelector("#modalOrderDescription");
const paymentLinkText = document.querySelector("#paymentLinkText");
const closePaymentLink = document.querySelector("#closePaymentLink");
const backPaymentLink = document.querySelector("#backPaymentLink");
const copyPaymentLink = document.querySelector("#copyPaymentLink");
const detailActions = document.querySelector("#detailActions");
const detailContent = document.querySelector("#detailContent");
const backToOrders = document.querySelector("#backToOrders");

let snapshot = { ...state };
let currentPaymentLink = "";
let currentDetailOrderNo = "";

function setEditing(editing) {
  app.classList.toggle("editing", editing);
  pageActions.innerHTML = editing
    ? '<button class="btn" id="cancelBtn" type="button">取 消</button><button class="btn primary" id="saveBtn" type="button">保 存</button>'
    : '<button class="btn primary" id="editBtn" type="button">编 辑</button>';

  if (editing) {
    snapshot = { ...state };
    bindEditActions();
    syncControls();
    validateExpiry();
  } else {
    document.querySelector("#editBtn").addEventListener("click", () => setEditing(true));
  }
}

function bindEditActions() {
  document.querySelector("#cancelBtn").addEventListener("click", () => {
    Object.assign(state, snapshot);
    render();
    setEditing(false);
  });

  document.querySelector("#saveBtn").addEventListener("click", () => {
    if (!validateExpiry()) return;
    document.querySelectorAll("[data-edit-field]").forEach((control) => {
      state[control.dataset.editField] = control.value.trim();
    });
    state.expiryValue = expiryValue.value;
    state.expiryUnit = expiryUnit.value;
    render();
    setEditing(false);
    showToast();
  });

  document.querySelectorAll("[data-edit-field]").forEach((control) => {
    control.addEventListener("input", updatePreview);
    control.addEventListener("change", updatePreview);
  });

  expiryValue.addEventListener("input", validateExpiry);
  expiryUnit.addEventListener("change", validateExpiry);
}

function syncControls() {
  document.querySelectorAll("[data-edit-field]").forEach((control) => {
    control.value = state[control.dataset.editField];
  });
  expiryValue.value = state.expiryValue;
  expiryUnit.value = state.expiryUnit;
}

function render() {
  document.querySelectorAll("[data-field]").forEach((target) => {
    const field = target.dataset.field;
    target.textContent = field === "expiryText" ? formatExpiry() : state[field];
  });
  syncPhoneText();
}

function formatExpiry() {
  return `${state.expiryValue} ${unitText[state.expiryUnit]}`;
}

function updatePreview() {
  const paymentLabel = document.querySelector('[data-edit-field="paymentLabel"]').value || "付款金额";
  const customerLabel = document.querySelector('[data-edit-field="customerLabel"]').value || "顾客名称";
  const phoneLabel = document.querySelector('[data-edit-field="phoneLabel"]').value || "联系电话";
  const businessLabel = document.querySelector('[data-edit-field="businessLabel"]').value || "业务单号";
  const titleLabel = document.querySelector('[data-edit-field="titleLabel"]').value || "订单主题";
  const descLabel = document.querySelector('[data-edit-field="descLabel"]').value || "订单描述";

  setPreviewLabel("paymentLabel", paymentLabel);
  setPreviewLabel("customerLabel", customerLabel);
  setPreviewLabel("phoneLabel", phoneLabel);
  setPreviewLabel("businessLabel", businessLabel);
  setPreviewLabel("titleLabel", titleLabel);
  setPreviewLabel("descLabel", descLabel);
}

function syncPhoneText() {
  setPreviewLabel("paymentLabel", state.paymentLabel);
  setPreviewLabel("customerLabel", state.customerLabel);
  setPreviewLabel("phoneLabel", state.phoneLabel);
  setPreviewLabel("businessLabel", state.businessLabel);
  setPreviewLabel("titleLabel", state.titleLabel);
  setPreviewLabel("descLabel", state.descLabel);
}

function setPreviewLabel(field, label) {
  const node = document.querySelector(`[data-preview="${field}"]`);
  if (node) node.textContent = label;
  if (field === "paymentLabel") {
    document.querySelector(".amount-card .phone-input span:last-child").textContent = `请输入${label}`;
  }
}

function validateExpiry() {
  const value = Number(expiryValue.value);
  const unit = expiryUnit.value;
  const max = maxByUnit[unit];
  let message = "最长 30 天";
  let valid = true;

  if (!Number.isInteger(value) || value <= 0) {
    message = "请输入正整数";
    valid = false;
  } else if (value > max) {
    message = `最长 ${max} ${unitText[unit]}`;
    valid = false;
  }

  expiryHelp.textContent = message;
  expiryHelp.classList.toggle("error", !valid);
  expiryEditor.classList.toggle("field-error", !valid);

  const saveBtn = document.querySelector("#saveBtn");
  if (saveBtn) saveBtn.disabled = !valid;

  return valid;
}

function showToast(message = "保存成功") {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1400);
}

function showPage(page, hash = page) {
  const activeSidePage = page === "detail" ? "orders" : page;
  sideItems.forEach((item) => item.classList.toggle("active", item.dataset.page === activeSidePage));
  panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === page));
  window.location.hash = hash;
}

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function matchFuzzy(source, keyword) {
  const value = normalize(keyword);
  if (!value) return true;
  return normalize(source).includes(value);
}

function matchExact(source, keyword) {
  const value = normalize(keyword);
  if (!value) return true;
  return normalize(source) === value;
}

function findOrder(identifier) {
  return orders.find(
    (item) => item.internalOrderNo === identifier || (item.liteposOrderNo !== "-" && item.liteposOrderNo === identifier),
  );
}

function matchDateRange(createdAt, start, end) {
  const date = createdAt.slice(0, 10);
  if (start && date < start) return false;
  if (end && date > end) return false;
  return true;
}

function getFilteredOrders() {
  const data = new FormData(orderFilters);
  return orders.filter((order) => {
    return (
      matchFuzzy(order.customerName, data.get("customerName")) &&
      matchFuzzy(order.orderTitle, data.get("orderTitle")) &&
      matchFuzzy(order.orderDescription, data.get("orderDescription")) &&
      matchExact(order.businessOrderNo, data.get("businessOrderNo")) &&
      matchFuzzy(order.salesName, data.get("salesName")) &&
      matchFuzzy(order.store, data.get("store")) &&
      matchExact(order.liteposOrderNo, data.get("liteposOrderNo")) &&
      matchExact(order.orderStatus, data.get("orderStatus")) &&
      matchExact(order.refundStatus, data.get("refundStatus")) &&
      matchDateRange(order.createdAt, data.get("createdStart"), data.get("createdEnd"))
    );
  });
}

function statusClass(status) {
  return {
    待收款: "pending",
    收款中: "paying",
    收款成功: "done",
    已取消: "cancelled",
    未退款: "unrefunded",
    部分退款: "refunded-partial",
    已全额退款: "refunded",
  }[status];
}

function canViewPaymentLink(order) {
  return order.paymentMethod === "远程收款" && (order.orderStatus === "待收款" || order.orderStatus === "收款中");
}

function renderOrders() {
  const rows = getFilteredOrders();
  tableCount.textContent = `共 ${rows.length} 条`;
  paginationText.textContent = rows.length ? `第 1-${rows.length} 条 / 共 ${rows.length} 条` : "第 1-0 条 / 共 0 条";
  syncFilterFloatingLabels();

  ordersBody.innerHTML = rows.length
    ? rows
        .map((order) => {
          const canViewLink = canViewPaymentLink(order);
          return `
            <tr>
              <td data-column="createdAt">${order.createdAt}</td>
              <td class="amount" data-column="amount">${order.amount}</td>
              <td data-column="customerName">${order.customerName}</td>
              <td class="truncate" data-column="orderTitle" title="${order.orderTitle}">${order.orderTitle}</td>
              <td class="truncate" data-column="orderDescription" title="${order.orderDescription}">${order.orderDescription}</td>
              <td data-column="businessOrderNo">${order.businessOrderNo}</td>
              <td data-column="store">${order.store}</td>
              <td data-column="salesName">${order.salesName}</td>
              <td data-column="orderStatus"><span class="status ${statusClass(order.orderStatus)}">${order.orderStatus}</span></td>
              <td data-column="refundStatus"><span class="status ${statusClass(order.refundStatus)}">${order.refundStatus}</span></td>
              <td data-column="completedAt">${order.completedAt}</td>
              <td data-column="internalOrderNo">${order.internalOrderNo}</td>
              <td class="actions-cell">
                ${
                  canViewLink
                    ? `<button class="link-action" data-payment-link="${order.internalOrderNo}" type="button">查看付款链接</button>`
                    : ""
                }
                <button class="link-action" data-detail-order="${order.internalOrderNo}" type="button">详情</button>
              </td>
            </tr>
          `;
        })
        .join("")
    : `<tr><td colspan="13">暂无数据</td></tr>`;

  applyColumnVisibility();
  tableWrap.scrollLeft = 0;
}

function applyColumnVisibility() {
  columnPanel.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    document.querySelectorAll(`[data-column="${checkbox.value}"]`).forEach((cell) => {
      cell.classList.toggle("is-hidden", !checkbox.checked);
    });
  });
}

function syncFilterFloatingLabels() {
  orderFilters.querySelectorAll(".filter-item").forEach((item) => {
    const hasValue = Array.from(item.querySelectorAll("input, select")).some((control) => control.value.trim());
    item.classList.toggle("has-value", hasValue);
  });
}

function openPaymentLink(orderNo) {
  const order = findOrder(orderNo);
  if (!order) return;
  currentPaymentLink = order.paymentLink;
  modalAmount.textContent = order.amount;
  modalCustomerName.textContent = order.customerName;
  modalOrderTitle.textContent = order.orderTitle;
  modalOrderDescription.textContent = order.orderDescription;
  paymentLinkText.textContent = order.paymentLink;
  paymentLinkText.title = order.paymentLink;
  paymentLinkModal.classList.add("open");
  paymentLinkModal.setAttribute("aria-hidden", "false");
}

function getOrderDetail(orderNo) {
  const order = findOrder(orderNo);
  if (!order) return null;
  return {
    ...order,
    phone: "-",
    validDuration: "-",
    expireAt: "-",
    paidAmount: "-",
    refundedAmount: "-",
    refundStatus: order.refundStatus || "未退款",
    transactions: [],
    ...orderDetails[order.internalOrderNo],
    ...orderDetails[order.liteposOrderNo],
  };
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderDetailField(label, value, className = "") {
  return `
    <div class="detail-field ${className}">
      <label>${escapeHtml(label)}</label>
      <span>${escapeHtml(value || "-")}</span>
    </div>
  `;
}

function renderTransactionRows(transactions) {
  if (!transactions.length) {
    return `<tr><td colspan="9">暂无交易记录</td></tr>`;
  }

  return transactions
    .map(
      (record) => `
        <tr>
          <td>${escapeHtml(record.tradedAt)}</td>
          <td>${escapeHtml(record.liteposFlowNo)}</td>
          <td>${escapeHtml(record.sqbTradeNo)}</td>
          <td>${escapeHtml(record.channelFlowNo)}</td>
          <td>${escapeHtml(record.type)}</td>
          <td>${escapeHtml(record.paymentMethod)}</td>
          <td class="number">${escapeHtml(record.transactionAmount)}</td>
          <td class="number">${escapeHtml(record.receivedAmount)}</td>
          <td><span class="record-status">${escapeHtml(record.status)}</span></td>
        </tr>
      `,
    )
    .join("");
}

function renderPaymentLinkSection(order) {
  const shouldShowLink = canViewPaymentLink(order);

  return `
    <section class="detail-section">
      <h2 class="detail-section-title">收款方式</h2>
      <div class="detail-method-row">
        <span>${escapeHtml(order.paymentMethod)}</span>
      </div>
      ${
        shouldShowLink
          ? `<div class="detail-link-row">
              <button class="detail-link-text" data-copy-payment-link="${escapeHtml(order.internalOrderNo)}" type="button" title="${escapeHtml(order.paymentLink)}">${escapeHtml(order.paymentLink)}</button>
              <button class="btn" data-copy-payment-link="${escapeHtml(order.internalOrderNo)}" type="button">复 制</button>
            </div>`
          : ""
      }
    </section>
  `;
}

function getDetailRefundSubStatus(order) {
  const refundSubStatuses = ["部分退款", "已全额退款"];
  return order.transactions.find((record) => refundSubStatuses.includes(record.status))?.status || "";
}

function renderRefundSubStatus(order, refundSubStatus) {
  if (!refundSubStatus) return "";
  const amount = order.refundedAmount && order.refundedAmount !== "-" ? ` ${order.refundedAmount}` : "";
  return `
    <small>
      <span class="status ${statusClass(refundSubStatus)}">${escapeHtml(refundSubStatus)}</span>
      ${amount ? `<span class="refund-sub-amount">${escapeHtml(amount)}</span>` : ""}
    </small>
  `;
}

function renderDetailStatus(order) {
  const refundSubStatus = getDetailRefundSubStatus(order);

  return `
    <strong>
      <span class="status ${statusClass(order.orderStatus)}">${escapeHtml(order.orderStatus)}</span>
      ${renderRefundSubStatus(order, refundSubStatus)}
    </strong>
  `;
}

function renderOrderDetail(orderNo = currentDetailOrderNo) {
  const order = getOrderDetail(orderNo);
  if (!order) {
    detailActions.innerHTML = "";
    detailContent.innerHTML = `<div class="detail-section">暂无订单信息</div>`;
    return;
  }

  currentDetailOrderNo = order.internalOrderNo;
  detailActions.innerHTML = "";

  detailContent.innerHTML = `
    <div class="detail-overview">
      <div class="overview-item">
        <label>创建时间</label>
        <strong>${escapeHtml(order.createdAt)}</strong>
      </div>
      <div class="overview-item">
        <label>订单金额</label>
        <strong class="amount-value">${escapeHtml(order.amount)}</strong>
      </div>
      <div class="overview-item status-overview">
        <label>订单状态</label>
        ${renderDetailStatus(order)}
      </div>
    </div>

    ${renderPaymentLinkSection(order)}

    <section class="detail-section">
      <h2 class="detail-section-title">订单信息</h2>
      <div class="detail-fields">
        ${renderDetailField("顾客名称", order.customerName)}
        ${renderDetailField("联系电话", order.phone)}
        ${renderDetailField("订单主题", order.orderTitle)}
        ${renderDetailField("订单描述", order.orderDescription)}
        ${renderDetailField("内部订单号", order.internalOrderNo)}
        ${renderDetailField("轻 POS 订单号", order.liteposOrderNo)}
        ${renderDetailField("业务订单号", order.businessOrderNo)}
        ${renderDetailField("门店", order.store)}
        ${renderDetailField("销售名称", order.salesName)}
        ${renderDetailField("创建时间", order.createdAt)}
        ${renderDetailField("完成时间", order.completedAt)}
      </div>
    </section>

    <section class="detail-section">
      <h2 class="detail-section-title">交易记录</h2>
      <div class="record-table-wrap">
        <table class="record-table">
          <thead>
            <tr>
              <th>交易时间</th>
              <th>轻POS流水号</th>
              <th>收钱吧交易单号</th>
              <th>通道流水号</th>
              <th>交易类型</th>
              <th>支付方式</th>
              <th class="number">交易金额</th>
              <th class="number">实收金额</th>
              <th>交易状态</th>
            </tr>
          </thead>
          <tbody>${renderTransactionRows(order.transactions)}</tbody>
        </table>
      </div>
    </section>
  `;
}

function showDetail(orderNo) {
  const order = findOrder(orderNo);
  renderOrderDetail(orderNo);
  showPage("detail", `detail-${order?.internalOrderNo || orderNo}`);
}

function closePaymentLinkModal() {
  paymentLinkModal.classList.remove("open");
  paymentLinkModal.setAttribute("aria-hidden", "true");
  currentPaymentLink = "";
}

async function copyText(text) {
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }
  showToast("链接已复制");
}

function copyPaymentLinkByOrderNo(orderNo) {
  const order = findOrder(orderNo);
  if (order) copyText(order.paymentLink);
}

function copyCurrentPaymentLink() {
  copyText(currentPaymentLink);
}

sideItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    showPage(item.dataset.page);
  });
});

orderFilters.addEventListener("submit", (event) => {
  event.preventDefault();
  renderOrders();
});

orderFilters.addEventListener("input", syncFilterFloatingLabels);
orderFilters.addEventListener("change", syncFilterFloatingLabels);

document.querySelector("#resetFilters").addEventListener("click", () => {
  orderFilters.reset();
  renderOrders();
});

ordersBody.addEventListener("click", (event) => {
  const paymentTarget = event.target.closest("[data-payment-link]");
  if (paymentTarget) {
    openPaymentLink(paymentTarget.dataset.paymentLink);
    return;
  }

  const detailTarget = event.target.closest("[data-detail-order]");
  if (detailTarget) showDetail(detailTarget.dataset.detailOrder);
});

columnSettingBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  columnPanel.classList.toggle("open");
});

columnPanel.addEventListener("change", applyColumnVisibility);
columnPanel.addEventListener("click", (event) => event.stopPropagation());

document.addEventListener("click", () => {
  columnPanel.classList.remove("open");
});

closePaymentLink.addEventListener("click", closePaymentLinkModal);
backPaymentLink.addEventListener("click", closePaymentLinkModal);
paymentLinkModal.addEventListener("click", (event) => {
  if (event.target === paymentLinkModal) closePaymentLinkModal();
});
copyPaymentLink.addEventListener("click", copyCurrentPaymentLink);
paymentLinkText.addEventListener("click", copyCurrentPaymentLink);

detailActions.addEventListener("click", (event) => {
  const target = event.target.closest("[data-copy-payment-link]");
  if (target) copyPaymentLinkByOrderNo(target.dataset.copyPaymentLink);
});

detailContent.addEventListener("click", (event) => {
  const target = event.target.closest("[data-copy-payment-link]");
  if (target) copyPaymentLinkByOrderNo(target.dataset.copyPaymentLink);
});

backToOrders.addEventListener("click", () => showPage("orders"));

editBtn.addEventListener("click", () => setEditing(true));
renderOrders();
render();

const initialHash = window.location.hash.replace("#", "");
if (initialHash.startsWith("detail-")) {
  showDetail(initialHash.replace("detail-", ""));
} else {
  showPage(initialHash === "orders" ? "orders" : "settings");
}
