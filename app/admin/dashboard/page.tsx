"use client"

import { UserOutlined } from "@ant-design/icons"
import { Avatar, Button, Input, Modal, Select, Tabs } from "antd"
import type { TableColumnsType, TabsProps } from "antd"
import { useContext, useEffect, useState } from "react"
import { BarChart } from "components/chart"
import DashTitle from "components/dash_title"
import MyIcon from "components/icon"
import MyPagination from "components/pagination"
import MyRangePicker from "components/rangepicker"
import { MyTable } from "components/table"
import { HeaderContext } from "context/main"

const tabs: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <div className="flex items-center space-x-1">
        <MyIcon type="file_search" />
        <span>All 1</span>
      </div>
    ),
    children: (
      <div className="flex items-center space-x-2 border-b pb-3">
        <Avatar size={32} icon={<UserOutlined />} />
        <div>
          <p className="font-semibold">Albert Flores</p>
          <p>in Your Contact</p>
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className="flex items-center space-x-1">
        <MyIcon type="file" />
        <span>Companies 0</span>
      </div>
    ),
    children: (
      <div className="px-12 py-10 text-center">
        <p className="text-xl font-semibold">No results</p>
        <p className="text-gray-500">There is no result in search or try with other keyword</p>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className="flex items-center space-x-1">
        <MyIcon type="two_users" />
        <span>People 1</span>
      </div>
    ),
    children: (
      <div className="flex items-center space-x-2 border-b pb-3">
        <Avatar size={32} icon={<UserOutlined />} />
        <div>
          <p className="font-semibold">Albert Flores</p>
          <p>in Your Contact</p>
        </div>
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <div className="flex items-center space-x-1">
        <MyIcon type="two_users" />
        <span>Datasets 0</span>
      </div>
    ),
    children: (
      <div className="px-12 py-10 text-center">
        <p className="text-xl font-semibold">No results</p>
        <p className="text-gray-500">There is no result in search or try with other keyword</p>
      </div>
    ),
  },
]

interface DataType {
  key: React.Key
  name: string
  email: string
  phone: string
  status: string
  location: string
  plan: string
  action: string
}

const data: DataType[] = [
  {
    key: "1",
    name: "Robert Fox",
    email: "Pfr@example.com",
    phone: "(671) 555-0110",
    status: "Active",
    location: "Austin, USA",
    plan: "Free",
    action: "",
  },
  {
    key: "2",
    name: "DadRobert Fox",
    email: "Pfr@example.com",
    phone: "(671) 555-0110",
    status: "Active",
    location: "Austin, USA",
    plan: "Free",
    action: "",
  },
  {
    key: "3",
    name: "Roman Fox",
    email: "Pfr@example.com",
    phone: "(671) 555-0110",
    status: "Active",
    location: "Austin, USA",
    plan: "Free",
    action: "",
  },
]

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows)
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
}

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [rangeType, setRangeType] = useState("month")
  const [keyword1, setKeyword1] = useState("")
  const { searchVal } = useContext(HeaderContext)

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    if (searchVal.length > 3) {
      setIsModalOpen(true)
    }
  }, [searchVal])

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (source: any) => (
        <div className="flex items-center space-x-2">
          <Avatar size={24} icon={<UserOutlined />} />
          <p className="text-[14px] leading-[21px]">{source}</p>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
      render: (source: any) => (
        <div className="flex items-center space-x-2">
          <MyIcon type="envelope" />
          <p className="text-[14px] font-medium leading-[21px] underline">{source}</p>
        </div>
      ),
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
      responsive: ["sm"],
      render: (source: any) => (
        <div className="flex items-center space-x-2">
          <MyIcon type="phone" />
          <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
      responsive: ["lg"],
      render: (source: any) => (
        <span className="rounded bg-[#edf2fe] px-1.5 py-1 text-center text-[12px] leading-[16.8px] text-[#16a3a4]">
          {source}
        </span>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      sorter: (a, b) => a.location.localeCompare(b.location),
      responsive: ["lg"],
      render: (source: any) => (
        <div className="flex items-center space-x-2">
          <MyIcon type="mappin" />
          <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>
        </div>
      ),
    },
    {
      title: "Plan",
      dataIndex: "plan",
      key: "plan",
      sorter: (a, b) => a.plan.localeCompare(b.plan),
      responsive: ["xl"],
      render: (source) => <p className="text-[14px] leading-[21px] text-[#727272]">{source}</p>,
    },
    {
      title: "",
      key: "action",
      responsive: ["xl"],
      render: () => (
        <div className="flex items-center space-x-1">
          <span className="cursor-pointer">
            <MyIcon type="file_plus" />
          </span>
          <span className="cursor-pointer">
            <MyIcon type="edit_user" />
          </span>
          <span className="cursor-pointer">
            <MyIcon type="trash_1" />
          </span>
        </div>
      ),
    },
  ]

  return (
    <div>
      <div className="mr-8 border-y p-4">
        <DashTitle />
      </div>
      <div className="grid gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:pr-16">
        <div className="space-y-2 rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between text-xl">
            <MyIcon type="envelope" />
            <MyIcon type="caret" className="-rotate-90" />
          </div>
          <div className="text-lg text-gray-500">Total Sales</div>
          <div className="text-3xl">$25,000</div>
        </div>
        <div className="space-y-2 rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between text-xl">
            <MyIcon type="briefcase" />
            <MyIcon type="caret" className="-rotate-90" />
          </div>
          <div className="text-lg text-gray-500">API Calls</div>
          <div className="text-3xl">1,458</div>
        </div>
        <div className="space-y-2 rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between text-xl">
            <MyIcon type="contact" />
            <MyIcon type="caret" className="-rotate-90" />
          </div>
          <div className="text-lg text-gray-500">New Customer</div>
          <div className="text-3xl">1,652</div>
        </div>
        <div className="space-y-2 rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between text-xl">
            <MyIcon type="active" />
            <MyIcon type="caret" className="-rotate-90" />
          </div>
          <div className="text-lg text-gray-500">Active Subscription</div>
          <div className="text-3xl">1,652</div>
        </div>
      </div>
      <div className="mx-4 border p-4 lg:pr-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[20px] font-medium leading-[24px]">Data Revealed</p>
            <div className="mt-4 flex items-center space-x-3">
              <p className="text-[32px] font-medium leading-[38px]">64,23%</p>
              <div className="flex items-center space-x-2 rounded-[36px] bg-[#eef5f0] px-2 py-1 text-[#589e67]">
                <MyIcon type="trend_up" />
                <p>12%</p>
              </div>
            </div>
            <p className="mt-2 text-[14px] font-medium leading-[21px] text-[#727272]">Data request by type over time</p>
          </div>
          <div className="md:flex md:space-x-2">
            <MyRangePicker type={rangeType} />
            <Select
              value={rangeType}
              onChange={(val) => setRangeType(val)}
              className="w-30 mt-2 md:mt-0"
              options={[
                { value: "month", label: "Month" },
                { value: "date", label: "date" },
              ]}
            />
          </div>
        </div>
        <div>
          <BarChart />
        </div>
      </div>
      <div className="mx-4 mt-4 rounded border bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-xl font-semibold">Latest Prospects</div>
          <div className="flex space-x-2">
            <Input
              id="search_prospect"
              size="large"
              placeholder="Search"
              value={keyword1}
              onChange={(e) => setKeyword1(e.target.value)}
              prefix={<MyIcon type="magnifying" />}
              suffix={
                <>
                  <MyIcon type="command" />
                  <span className="ml-1">
                    <MyIcon type="f" />
                  </span>
                </>
              }
            />
            <Button size="large" className="w-[98px] rounded border border-black font-medium text-black">
              <div className="flex items-center justify-center space-x-2">
                <MyIcon type="sort" />
                <span>Sort By</span>
              </div>
            </Button>
            <Button size="large" className="w-[98px] rounded border border-black font-medium text-black">
              <div className="flex items-center justify-center space-x-2">
                <MyIcon type="filter" />
                <span>Actions</span>
              </div>
            </Button>
          </div>
        </div>
        <MyTable
          columns={columns}
          dataSource={data}
          pagination={false}
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
        />
      </div>
      <div className="mt-8 pl-4">
        <MyPagination />
      </div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} centered>
        <Input
          id="search_people"
          size="middle"
          className="w-1/2"
          placeholder="Search"
          prefix={<MyIcon type="magnifying" />}
        />
        <Tabs defaultActiveKey="1" items={tabs} onChange={() => {}} />
      </Modal>
    </div>
  )
}

export default Dashboard
