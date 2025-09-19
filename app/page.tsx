"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Download, FileSpreadsheet, FileJson } from "lucide-react"
import * as XLSX from "xlsx"

export default function ExcelToJsonConverter() {
  const [jsonOutput, setJsonOutput] = useState("")
  const [fileName, setFileName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsLoading(true)
    setError("")
    setFileName(file.name)

    try {
      const arrayBuffer = await file.arrayBuffer()
      const workbook = XLSX.read(arrayBuffer, { type: "array" })

      // Get the first worksheet
      const worksheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[worksheetName]

      const jsonData = XLSX.utils.sheet_to_json(worksheet)

      // Format the JSON output with proper indentation
      const formattedJson = JSON.stringify(jsonData, null, 2)
      setJsonOutput(formattedJson)
    } catch (err) {
      setError("Error processing file. Please make sure it's a valid Excel file.")
      console.error("Error processing Excel file:", err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const downloadJson = useCallback(() => {
    if (!jsonOutput) return

    const blob = new Blob([jsonOutput], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = fileName.replace(/\.[^/.]+$/, "") + ".json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [jsonOutput, fileName])

  const copyToClipboard = useCallback(async () => {
    if (!jsonOutput) return

    try {
      await navigator.clipboard.writeText(jsonOutput)
    } catch (err) {
      console.error("Failed to copy to clipboard:", err)
    }
  }, [jsonOutput])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Excel to JSON Converter</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Convert your Excel spreadsheets to JSON format instantly
          </p>
        </div>

        {/* Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileSpreadsheet className="h-5 w-5" />
              Upload Excel File
            </CardTitle>
            <CardDescription>Select an Excel file (.xlsx, .xls) to convert to JSON format</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="excel-file">Excel File</Label>
                <Input
                  id="excel-file"
                  type="file"
                  accept=".xlsx,.xls"
                  onChange={handleFileUpload}
                  disabled={isLoading}
                />
              </div>

              {fileName && (
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <FileSpreadsheet className="h-4 w-4" />
                  <span>Selected: {fileName}</span>
                </div>
              )}

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Output Section */}
        {jsonOutput && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileJson className="h-5 w-5" />
                JSON Output
              </CardTitle>
              <CardDescription>Your Excel data converted to JSON format</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  value={jsonOutput}
                  readOnly
                  className="min-h-[300px] font-mono text-sm"
                  placeholder="JSON output will appear here..."
                />

                <div className="flex gap-2">
                  <Button onClick={downloadJson} className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download JSON
                  </Button>
                  <Button variant="outline" onClick={copyToClipboard}>
                    Copy to Clipboard
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>How to Use</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Click "Choose File" and select your Excel file (.xlsx or .xls)</li>
              <li>The file will be automatically processed and converted to JSON</li>
              <li>Review the JSON output in the text area below</li>
              <li>Download the JSON file or copy it to your clipboard</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
