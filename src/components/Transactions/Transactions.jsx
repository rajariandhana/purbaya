import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useTransactions } from "../../hooks/transactions";
import { useCategories } from "../../hooks/categories";
import { Amount, Chip } from "../Commons";
import { useCurrencies } from "../../hooks/currencies";
import { dateOnly } from "../../utils/util";

const columns = [
  {
    key: "currency-amount",
    label: "Amount",
    width: 10,
  },
  {
    key: "category",
    label: "Category",
    width: 10,
  },
  // {
  //   key: "bank",
  //   label: "Bank",
  //   width: 10,
  // },
  {
    key: "description_1",
    label: "Description 1",
    width: 10,
  },
  {
    key: "date",
    label: "Date",
    width: 10,
  },
  // {
  //   key: "",
  //   label: "",
  //   width: 10,
  // }
];
export function Transactions() {
  const { data: transactions, isPending } = useTransactions();
  const { data: categories } = useCategories();
  const { data: currencies } = useCurrencies();
  const renderCell = (transaction, columnKey) => {
    switch (columnKey) {
      case "currency-amount": {
        const { flag } = currencies.filter(
          (c) => c.slug === transaction.currency,
        )[0];
        return Amount(transaction.currency, flag, transaction.amount);
      }
      case "category": {
        const { label, color } = categories.filter(
          (c) => c.slug === transaction.category,
        )[0];
        return Chip(label, color);
      }
      case "description_1":
        return (
          <span className="overflow-hidden text-ellipsis w-6 bg-red-50">
            {transaction.description_1}
          </span>
        );
      case "date":
        return dateOnly(transaction.timestamp);
      default:
        return "";
    }
  };
  return (
    <Table isStriped hideHeader removeWrapper fullWidth={true}>
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.key} width={column.width}>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        items={transactions || []}
        isLoading={isPending}
        loadingContent={<Spinner />}
      >
        {(transaction) => (
          <TableRow key={transaction._id}>
            {(columnKey) => (
              <TableCell>{renderCell(transaction, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
