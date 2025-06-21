import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="All">All Categories</SelectItem>
          <SelectItem value="Artificial Inteligence">
            Artificial Intelligence
          </SelectItem>
          <SelectItem value="Buiness Innovation">
            Business Innovation
          </SelectItem>
          <SelectItem value="Web Development">Web Development</SelectItem>
          <SelectItem value="Marketing">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
